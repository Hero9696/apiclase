const express = require("express");
const path = require("path");
const EncuestaController = require("./backend/controladores/obtenerEncuestaController");
const cors = require("cors");
const RESPUESTASUSUARIOCONTROLLER = require("./backend/controladores/respuestasUsuarioController");
const RESUMENENCUESTACONTROLLER = require("./backend/controladores/resumenEncuestaController");
const { getConnection } = require('./connect');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Servir archivos estáticos (frontend)
app.use(express.static(path.join(__dirname, '.')));

// Inicializar conexión a la base de datos
(async () => {
    try {
        await getConnection();
        console.log("✅ Conexión a SQL Server establecida");
    } catch (err) {
        console.error("❌ Error conectando a la base de datos:", err.message);
    }
})();

// Rutas de la API
app.get("/encuestas/:tipo", EncuestaController.obtenerEncuesta);
app.get("/encuestas/resumen/:id", RESUMENENCUESTACONTROLLER.resumenEncuesta);
app.post("/encuestas/respuestas", RESPUESTASUSUARIOCONTROLLER.guardar);

// Servir index.html para cualquier otra ruta (para SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '.', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
