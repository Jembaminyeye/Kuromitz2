const express = require("express");
const ruta = express.Router();

let MiLista = [];

ruta.get("/", (req, res) => {
  res.status(200).json(MiLista);
});

ruta.post("/", (req, res) => {
  const { titulo, descripcion, imagen, calificacion } = req.body;

  // Si no hay descripción, crear una automática a partir del título y calificación
  const desc = descripcion || `Película "${titulo}" con calificación de ${calificacion || 'N/A'}.`;

  if (!titulo) {
    return res.status(400).json({ error: "El título es obligatorio." });
  }

  const nueva = {
    id: MiLista.length + 1,
    titulo,
    descripcion: desc,
    imagen: imagen || '',
    calificacion: calificacion || null,
  };

  MiLista.push(nueva);
  res.status(201).json({ mensaje: "Película agregada a tu lista con éxito." });
});

ruta.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = MiLista.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Película no encontrada." });
  }

  MiLista.splice(index, 1);
  res.status(200).json({ mensaje: "Película eliminada de tu lista." });
});

module.exports = ruta;
