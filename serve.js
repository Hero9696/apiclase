const express = require("express");
const EncuestaController = require("./backend/controladores/obtenerEncuestaController");
const { getConnection } = require("./connect");
const RESPUESTASUSUARIOCONTROLLER = require("./backend/controladores/respuestasUsuarioController");
const RESUMENENCUESTACONTROLLER = require("./backend/controladores/resumenEncuestaController");

const app = express();
app.use(express.json());
getConnection();
// Rutas de encuestas
app.get("/encuestas/:tipo", EncuestaController.obtenerEncuesta);
app.get("/encuestas/resumen/:id", RESUMENENCUESTACONTROLLER.resumenEncuesta);
app.post("/encuestas/respuestas", RESPUESTASUSUARIOCONTROLLER.guardar);
app.listen(3000, () => {
  console.log("✅ Servidor corriendo en http://localhost:3000");
});
