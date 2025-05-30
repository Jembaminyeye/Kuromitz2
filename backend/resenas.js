const express = require("express");
const ruta = express.Router();
const db = require("./db");

// Obtener todas las reseñas
ruta.get("/", (req, res) => {
    db.query(
        "SELECT r.*, u.usuario AS autor FROM resenas r LEFT JOIN usuarios u ON r.autor_id = u.id",
        (err, results) => {
            if (err) return res.status(500).json({ error: "Error en la base de datos" });
            res.status(200).json(results);
        }
    );
});

// Publicar una nueva reseña
ruta.post("/", (req, res) => {
    const {
        titulo,
        genero,
        duracion,
        estrellas,
        puntuacion,
        descripcion,
        etiquetas,
        autor // aquí recibes el nombre de usuario
    } = req.body;

    if (!titulo || !genero || !puntuacion || !descripcion || !autor) {
        return res.status(400).json({ error: "Faltan campos obligatorios." });
    }

    // Buscar el id del autor por su nombre de usuario
    db.query(
        "SELECT id FROM usuarios WHERE usuario = ?",
        [autor],
        (err, results) => {
            if (err) return res.status(500).json({ error: "Error en la base de datos" });
            if (results.length === 0) {
                return res.status(400).json({ error: "Autor no encontrado." });
            }
            const autor_id = results[0].id;

            // Insertar la reseña
            db.query(
                "INSERT INTO resenas (titulo, genero, duracion, estrellas, puntuacion, descripcion, etiquetas, autor_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
                [titulo, genero, duracion || 0, estrellas || "★★★☆☆", puntuacion, descripcion, Array.isArray(etiquetas) ? etiquetas.join(",") : etiquetas, autor_id],
                (err, results) => {
                    if (err) return res.status(500).json({ error: "Error al registrar reseña" });
                    res.status(201).json({ mensaje: "Reseña registrada con éxito." });
                }
            );
        }
    );
});

module.exports = ruta;
