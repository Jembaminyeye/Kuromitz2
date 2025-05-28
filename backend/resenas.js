const express = require("express");
const ruta = express.Router();

let Reseñas = [];

ruta.get("/", (req, res) => {
    res.status(200).json(Reseñas);
});

ruta.post("/", (req, res) => {
    console.log("📥 Datos recibidos en /resenas:", req.body);
    const {
        titulo,
        genero,
        duracion,
        estrellas,
        puntuacion,
        descripcion,
        etiquetas,
        autor
    } = req.body;

    if (!titulo || !genero || !puntuacion || !descripcion || !autor) {
        console.log("❌ Faltan campos:", req.body);
        return res.status(400).json({ error: "Faltan campos obligatorios." });
    }

    const nuevaReseña = {
        id: Reseñas.length + 1,
        titulo,
        genero,
        duracion: duracion || 0,
        estrellas: estrellas || "★★★☆☆",
        puntuacion,
        descripcion,
        etiquetas: etiquetas || [],
        likes: 0,
        comentarios: 0,
        autor,
        autorIniciales: autor[0].toUpperCase(),
        fecha: new Date().toISOString().split("T")[0]
    };

    Reseñas.push(nuevaReseña);
    console.log("✅ Reseña publicada:", nuevaReseña);
    res.status(201).json({ mensaje: "Reseña registrada con éxito." });
});

module.exports = ruta;
