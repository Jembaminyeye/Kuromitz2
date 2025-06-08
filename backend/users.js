const express = require("express");
const ruta = express.Router();
const db = require("./db");

// Mostrar todos los usuarios
ruta.get("/", (req, res) => {
    db.query("SELECT * FROM usuarios", (err, results) => {
        if (err) return res.status(500).json({ error: "Error en la base de datos" });
    res.status(200).json(results);
    });
});

//ACTUALIZAR USUARIO
ruta.put("/:id", (req, res) => {
  const { usuario, correo } = req.body;
  db.query(
    "UPDATE usuarios SET usuario = ?, correo = ? WHERE id = ?",
    [usuario, correo, req.params.id],
    (err, result) => {
      if (err) return res.status(500).json({ error: "Error en la base de datos" });
      res.status(200).json({ mensaje: "Usuario actualizado" });
    }
  );
});

//ELIMINAR USUARIO
ruta.delete("/:id", (req, res) => {
  db.query("DELETE FROM usuarios WHERE id = ?", [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: "Error en la base de datos" });
    res.status(200).json({ mensaje: "Usuario eliminado" });
  });
});

// Registrar nuevo usuario
ruta.post("/registro", (req, res) => {
    const { usuario, rut, correo, contraseña } = req.body;

    if (!usuario || !rut || !correo || !contraseña) {
        return res.status(400).json({ error: "Faltan campos obligatorios." });
    }

    // Verifica si el correo ya existe
    db.query(
        "SELECT * FROM usuarios WHERE correo = ?",
        [correo],
        (err, results) => {
            if (err) return res.status(500).json({ error: "Error en la base de datos" });
            if (results.length > 0) {
                return res.status(409).json({ error: "El correo ya está registrado." });
            }

            // Inserta el nuevo usuario
            db.query(
                "INSERT INTO usuarios (usuario, rut, correo, contraseña) VALUES (?, ?, ?, ?)",
                [usuario, rut, correo, contraseña],
                (err, results) => {
                    if (err) return res.status(500).json({ error: "Error al registrar usuario" });
                    res.status(201).json({ mensaje: "Usuario registrado con éxito." });
                }
            );
        }
    );
});

// Login
ruta.post("/login", (req, res) => {
    const { correo, contraseña } = req.body;

    db.query(
        "SELECT * FROM usuarios WHERE correo = ? AND contraseña = ?",
        [correo, contraseña],
        (err, results) => {
            if (err) return res.status(500).json({ error: "Error en la base de datos" });
            if (results.length === 0) {
                return res.status(401).json({ error: "Correo o contraseña incorrectos." });
            }
            res.status(200).json({ mensaje: "Inicio de sesión exitoso", usuario: results[0].usuario, id: results[0].id });
        }
    );
});

module.exports = ruta;



