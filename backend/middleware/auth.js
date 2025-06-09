const jwt = require("jsonwebtoken");
const SECRET_KEY = "clave_secreta_super_segura"; 

function verificarToken(req, res, next) {
  const authHeader = req.headers['authorization']; 
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ error: "Token no proporcionado." });

  jwt.verify(token, SECRET_KEY, (err, usuario) => {
    if (err) return res.status(403).json({ error: "Token inválido o expirado." });
    req.usuario = usuario;
    next();
  });
}

module.exports = verificarToken;
