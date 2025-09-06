const express = require("express");
const app = express();

// Ruta inicial
app.get("/", (req, res) => {
  res.send("¡Hola, Express está funcionando! 🚀");
});

// Iniciar servidor
app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
