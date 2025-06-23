const jwt = require('jsonwebtoken');
const JWT_SECRET = 'tu_clave_secreta';

function verificarToken(req, res, next) {
  const header = req.headers['authorization'];
  if (!header) return res.status(401).json({ error: 'Token requerido' });

  const token = header.replace('Bearer ', '');
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ error: 'Token inválido' });
    req.usuario = decoded;
    next();
  });
}

module.exports = verificarToken;