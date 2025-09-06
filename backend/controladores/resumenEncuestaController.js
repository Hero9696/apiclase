// controllers/resumenEncuestaController.js
const model = require('../models/resumenEncuestaModel');

async function resumenEncuesta(req, res) {
    try {
        const resumen = await model.obtenerResumen(req.params.id);
        if (resumen) {
            res.setHeader('Content-Type', 'application/json');
            res.send(resumen);
        } else {
            res.status(404).json({ message: 'Resumen no encontrado.' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Error interno del servidor.' });
    }
}

module.exports = { resumenEncuesta };