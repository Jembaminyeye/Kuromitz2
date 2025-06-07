const express = require("express");
const ruta = express.Router();
const db = require("./db");

//HAY UN TEMA CON LO QUE ES CALIFICACION PORQUE LA PONE DE FORMA NUMERICA Y NO EN ESTRELLAS

// Obtener todas las películas de la lista de un usuario (requieres el id del usuario)
ruta.get("/:usuario_id", (req, res) => {
  const usuario_id = parseInt(req.params.usuario_id);

  db.query(
    "SELECT * FROM mi_lista WHERE usuario_id = ?",
    [usuario_id],
    (err, results) => {
      if (err) return res.status(500).json({ error: "Error en la base de datos" });
      res.status(200).json(results);
    }
  );
});

// Agregar película a la lista
ruta.post("/", (req, res) => {
  const { usuario_id, titulo, descripcion, imagen, calificacion } = req.body;

  if (!usuario_id || !titulo) {
    return res.status(400).json({ error: "Faltan campos obligatorios." });
  }

  const desc = descripcion || `Película "${titulo}" con calificación de ${calificacion || "N/A"}`;

  db.query(
    "INSERT INTO mi_lista (usuario_id, titulo, descripcion, imagen, calificacion) VALUES (?, ?, ?, ?, ?)",
    [usuario_id, titulo, desc, imagen || "", calificacion || null],
    (err, results) => {
      if (err) return res.status(500).json({ error: "Error al agregar a la lista" });
      res.status(201).json({ mensaje: "Película agregada con éxito a tu lista." });
    }
  );
});

// Eliminar película de la lista
ruta.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  db.query("DELETE FROM mi_lista WHERE id = ?", [id], (err, result) => {
    if (err) return res.status(500).json({ error: "Error al eliminar" });

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Película no encontrada en tu lista" });
    }

    res.status(200).json({ mensaje: "Película eliminada de tu lista." });
  });
});

module.exports = ruta;
