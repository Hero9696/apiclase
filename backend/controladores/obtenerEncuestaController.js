// controllers/obtenerEncuestaController.js
const model = require('../models/obtenerEncuestaModel');

async function obtenerEncuesta(req, res) {
    try {
        const encuestas = await model.obtenerEncuestaPorTipo(req.params.id);
        if (encuestas && encuestas.length > 0) {
            res.json(encuestas);
        } else {
            res.status(404).json({ message: 'Encuesta no encontrada.' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Error interno del servidor.' });
    }
}

module.exports = { obtenerEncuesta };