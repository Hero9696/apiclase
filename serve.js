const express = require("express");
const EncuestaController = require("./controllers/encuestaController");

const app = express();
app.use(express.json());

// Rutas de encuestas
app.get("/encuestas/:tipo", EncuestaController.obtenerEncuestaPorTipo);
app.get("/encuestas/resumen/:id", EncuestaController.resumenEncuesta);

app.listen(3000, () => {
  console.log("✅ Servidor corriendo en http://localhost:3000");
});
