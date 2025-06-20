const express = require("express");
const cors = require("cors");
const rutaUsuarios = require("./users");
const rutaResenas = require("./resenas");
const rutaMiLista = require("./mi-lista");
const verificarToken = require("./middleware/auth");

const app = express(); 

app.use(cors());
app.use(express.json());

app.use("/usuarios", rutaUsuarios);
app.use("/resenas", verificarToken, rutaResenas);
app.use("/mi-lista", verificarToken, rutaMiLista);




app.get("/", (req, res) => {
  res.send("✅ API del backend funcionando :P");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor Node.js corriendo en http://localhost:${PORT}`);
});
