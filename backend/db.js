const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',        // Cambia por tu usuario de MySQL
  password: '1234', // Cambia por tu contraseña de MySQL
  database: 'kuromitz'       // Cambia por el nombre de tu base de datos
});

connection.connect((err) => {
  if (err) {
    console.error('❌ Error al conectar a MySQL:', err);
    return;
  }
  console.log('✅ Conectado a MySQL');
});

module.exports = connection;