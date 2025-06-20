const express = require("express");
const cors = require("cors");
const rutaUsuarios = require("./users");
const rutaResenas = require("./resenas");
const rutaMiLista = require("./mi-lista");

const app = express(); 

const corsOptions = {
  origin: 'http://localhost:8100', // o dominio en producción
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/usuarios", rutaUsuarios); //
app.use("/resenas", rutaResenas);
app.use("/mi-lista", rutaMiLista);


app.get("/", (req, res) => {
  res.send("✅ API del backend funcionando :D");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor Node.js corriendo en http://localhost:${PORT}`);
});
