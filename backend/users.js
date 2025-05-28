const express = require("express");
const ruta = express.Router();

let UserList = [
    { id: 1, usuario: "jemba", rut: "21.438.284-1", correo: "jemba@gmail.com", contraseña: "123" },
    { id: 2, usuario: "nacho", rut: "21.438.284-2", correo: "nacho@gmail.com", contraseña: "admin" }
];

// Mostrar todos los usuarios
ruta.get("/", (req, res) => {
    res.status(200).json(UserList);
});

// Registrar nuevo usuario
ruta.post("/registro", (req, res) => {
    const { usuario, rut, correo, contraseña } = req.body;

    if (!usuario || !rut || !correo || !contraseña) {
        return res.status(400).json({ error: "Faltan campos obligatorios." });
    }

    const existe = UserList.find(u => u.correo === correo);
    if (existe) {
        return res.status(409).json({ error: "El correo ya está registrado." });
    }

    const nuevoUsuario = {
        id: UserList.length + 1,
        usuario,
        rut,
        correo,
        contraseña
    };

    UserList.push(nuevoUsuario);
    res.status(201).json({ mensaje: "Usuario registrado con éxito." });
});

// Login
ruta.post("/login", (req, res) => {
    const { correo, contraseña } = req.body;

    const usuario = UserList.find(u => u.correo === correo && u.contraseña === contraseña);
    if (!usuario) {
        return res.status(401).json({ error: "Correo o contraseña incorrectos." });
    }

    res.status(200).json({ mensaje: "Inicio de sesión exitoso", usuario: usuario.usuario });
});

module.exports = ruta;



