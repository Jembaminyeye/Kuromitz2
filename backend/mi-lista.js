const express = require("express");
const ruta = express.Router();
const db = require("./db");
const xss = require("xss");


// Obtener todas las películas de la lista de un usuario
ruta.get("/:usuario_id", (req, res) => {
  const usuario_id = parseInt(req.params.usuario_id);

  if (!usuario_id || isNaN(usuario_id)) {
    return res.status(400).json({ error: "ID de usuario inválido." });
  }

  // Verificamos que el usuario exista antes de hacer la consulta
  db.query(
    "SELECT * FROM usuarios WHERE id = ?",
    [usuario_id],
    (err, userResults) => {
      if (err) return res.status(500).json({ error: "Error al verificar usuario." });
      if (userResults.length === 0) {
        return res.status(404).json({ error: "Usuario no encontrado." });
      }

      db.query(
        "SELECT * FROM mi_lista WHERE usuario_id = ?",
        [usuario_id],
        (err, results) => {
          if (err) return res.status(500).json({ error: "Error en la base de datos." });
          res.status(200).json(results);
        }
      );
    }
  );
});

// Agregar película a la lista
ruta.post("/", (req, res) => {
  const usuario_id = parseInt(req.body.usuario_id);
  const titulo = xss(req.body.titulo);
  const descripcion = xss(req.body.descripcion || "");
  const imagen = xss(req.body.imagen || "");
  const calificacion = req.body.calificacion || null;


  if (!usuario_id || !titulo) {
    return res.status(400).json({ error: "Faltan campos obligatorios." });
  }

  // Validamos existencia del usuario
  db.query(
    "SELECT * FROM usuarios WHERE id = ?",
    [usuario_id],
    (err, userResults) => {
      if (err) return res.status(500).json({ error: "Error al verificar usuario." });
      if (userResults.length === 0) {
        return res.status(404).json({ error: "Usuario no encontrado." });
      }

      const desc = descripcion || `Película "${titulo}" con calificación de ${calificacion || "N/A"}`;

      db.query(
        "INSERT INTO mi_lista (usuario_id, titulo, descripcion, imagen, calificacion) VALUES (?, ?, ?, ?, ?)",
        [usuario_id, titulo, desc, imagen || "", calificacion || null],
        (err, results) => {
          if (err) return res.status(500).json({ error: "Error al agregar a la lista." });
          res.status(201).json({ mensaje: "Película agregada con éxito a tu lista." });
        }
      );
    }
  );
});

// Eliminar película de la lista
ruta.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  if (!id || isNaN(id)) {
    return res.status(400).json({ error: "ID inválido." });
  }

  db.query("DELETE FROM mi_lista WHERE id = ?", [id], (err, result) => {
    if (err) return res.status(500).json({ error: "Error al eliminar." });

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Película no encontrada en tu lista." });
    }

    res.status(200).json({ mensaje: "Película eliminada de tu lista." });
  });
});

module.exports = ruta;
