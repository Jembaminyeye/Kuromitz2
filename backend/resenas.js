const express = require("express");
const ruta = express.Router();
const db = require("./db");
const xss = require("xss");


// Obtener todas las reseñas
ruta.get("/", (req, res) => {
  db.query(
    "SELECT r.*, u.usuario AS autor FROM resenas r LEFT JOIN usuarios u ON r.autor_id = u.id",
    (err, results) => {
      if (err) {
        console.error("❌ Error al obtener reseñas:", err);
        return res.status(500).json({ error: err.message });
      }
      res.status(200).json(results);
    }
  );
});

// Publicar una nueva reseña
ruta.post("/", (req, res) => {
  const titulo = xss(req.body.titulo);
  const genero = xss(req.body.genero);
  const duracion = parseInt(req.body.duracion || 0);
  const estrellas = xss(req.body.estrellas || "★★★☆☆");
  const puntuacion = parseFloat(req.body.puntuacion);
  const descripcion = xss(req.body.descripcion);
  const etiquetas = Array.isArray(req.body.etiquetas)
    ? req.body.etiquetas.map(et => xss(et))
    : xss(req.body.etiquetas || "");
  const autor = xss(req.body.autor);


  if (!titulo || !genero || !puntuacion || !descripcion || !autor) {
    return res.status(400).json({ error: "Faltan campos obligatorios." });
  }

  // Buscar el id del autor por su nombre de usuario
  db.query(
    "SELECT id FROM usuarios WHERE usuario = ?",
    [autor],
    (err, results) => {
      if (err) {
        console.error("❌ Error al buscar autor:", err);
        return res.status(500).json({ error: err.message });
      }
      if (results.length === 0) {
        return res.status(400).json({ error: "Autor no encontrado." });
      }
      const autor_id = results[0].id;

      // Asegurar que etiquetas sea string separado por comas
      const etiquetasStr = Array.isArray(etiquetas) ? etiquetas.join(",") : (etiquetas || "");

      // Insertar la reseña
      db.query(
        "INSERT INTO resenas (titulo, genero, duracion, estrellas, puntuacion, descripcion, etiquetas, autor_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [
          titulo,
          genero,
          duracion || 0,
          estrellas || "★★★☆☆",
          puntuacion,
          descripcion,
          etiquetasStr,
          autor_id,
        ],
        (err, results) => {
          if (err) {
            console.error("❌ Error al publicar reseña:", err);
            return res.status(500).json({ error: err.message });
          }
          res.status(201).json({ mensaje: "Reseña registrada con éxito." });
        }
      );
    }
  );
});

module.exports = ruta;
