const express = require("express");
const cors = require("cors");
app.use(cors());
const rutaUsuarios = require("./users");
const rutaResenas = require("./resenas");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/users", rutaUsuarios);
app.use("/resenas", rutaResenas);

app.get("/", (req, res) => {
  res.send("✅ API del backend funcionando :D");
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor Node.js corriendo en http://localhost:${PORT}`);
});