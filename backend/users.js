const express = require("express");
const ruta = express.Router();
const db = require("./db");
const bcrypt = require('bcryptjs');
const xss = require("xss");
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'tu_clave_secreta'; // Usa variable de entorno en producción


// Mostrar todos los usuarios
ruta.get("/", (req, res) => {
    db.query("SELECT * FROM usuarios", (err, results) => {
        if (err) return res.status(500).json({ error: "Error en la base de datos" });
    res.status(200).json(results);
    });
});

//ACTUALIZAR USUARIO
ruta.put("/:id", (req, res) => {
  const usuario = xss(req.body.usuario);
  const correo = xss(req.body.correo);

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
ruta.post("/registro", async (req, res) => {
  const usuario = xss(req.body.usuario);
    const rut = xss(req.body.rut);
    const correo = xss(req.body.correo);
    const contraseña = req.body.contraseña;


  if (!usuario || !rut || !correo || !contraseña) {
    return res.status(400).json({ error: "Faltan campos obligatorios." });
  }

  db.query("SELECT * FROM usuarios WHERE correo = ?", [correo], async (err, results) => {
    if (err) return res.status(500).json({ error: "Error en la base de datos" });
    if (results.length > 0) return res.status(409).json({ error: "El correo ya está registrado." });

    const hash = await bcrypt.hash(contraseña, 10); // encriptación

    db.query(
      "INSERT INTO usuarios (usuario, rut, correo, contraseña) VALUES (?, ?, ?, ?)",
      [usuario, rut, correo, hash],
      (err, results) => {
        if (err) return res.status(500).json({ error: "Error al registrar usuario" });
        res.status(201).json({ mensaje: "Usuario registrado con éxito." });
      }
    );
  });
});

// Login
ruta.post("/login", (req, res) => {
  const correo = xss(req.body.correo); 
  const contrasenaIngresada = req.body.contraseña;

  db.query("SELECT * FROM usuarios WHERE correo = ?", [correo], async (err, results) => {
    if (err) return res.status(500).json({ error: "Error en la base de datos" });
    if (results.length === 0) return res.status(401).json({ error: "Correo o contraseña incorrectos." });

    const usuario = results[0];
    const valido = await bcrypt.compare(contrasenaIngresada, usuario.contraseña);

    if (!valido) return res.status(401).json({ error: "Correo o contraseña incorrectos." });

    // Generar token JWT
    const token = jwt.sign(
      { id: usuario.id, usuario: usuario.usuario, correo: usuario.correo },
      JWT_SECRET,
      { expiresIn: '2h' }
    );

    res.status(200).json({
      mensaje: "Inicio de sesión exitoso",
      token, // <-- Aquí va el token
      usuario: usuario.usuario,
      id: usuario.id
    });
  });
});



module.exports = ruta;



