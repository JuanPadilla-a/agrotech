const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const rutas = require('./rutas');

const app = express();
const PORT = process.env.PORT || 3000;

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

// Iniciar servidor
app.listen(PORT, () => {
    console.log('╔════════════════════════════════════════╗');
    console.log('║     AGROTECH - Servidor Backend        ║');
    console.log('╚════════════════════════════════════════╝');
    console.log(`\n🚀 Servidor escuchando en: http://localhost:${PORT}`);
    console.log(`\n📚 API Documentation:`);
    console.log(`   GET  /api/productos - Obtener todos los productos`);
    console.log(`   GET  /api/productos/:id - Obtener producto por ID`);
    console.log(`   GET  /api/categorias - Obtener todas las categorías`);
    console.log(`   GET  /api/health - Verificar estado del servidor`);
    console.log(`\n⚙️  Presiona Ctrl+C para detener el servidor\n`);
});

module.exports = app;
