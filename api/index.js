const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const rutas = require('../backend/rutas');

const app = express();

// Middleware
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas de API
app.use('/api', rutas);

// Ruta raíz
app.get('/', (req, res) => {
    res.json({
        mensaje: 'Bienvenido a AGROTECH API',
        version: '1.0.0',
        endpoints: {
            productos: '/api/productos',
            categorias: '/api/categorias',
            health: '/api/health'
        }
    });
});

// Manejo de errores 404
app.use((req, res) => {
    res.status(404).json({ error: 'Ruta no encontrada' });
});

module.exports = app;
