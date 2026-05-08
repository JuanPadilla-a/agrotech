const express = require('express');
const router = express.Router();
const productos = require('./productos');

// GET - Obtener todos los productos
router.get('/productos', (req, res) => {
    try {
        res.json(productos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener productos' });
    }
});

// GET - Obtener un producto por ID
router.get('/productos/:id', (req, res) => {
    try {
        const producto = productos.find(p => p.id === parseInt(req.params.id));
        if (!producto) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }
        res.json(producto);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el producto' });
    }
});

// GET - Obtener productos por categoría
router.get('/productos/categoria/:categoria', (req, res) => {
    try {
        const productosFiltrados = productos.filter(p => 
            p.categoria.toLowerCase() === req.params.categoria.toLowerCase()
        );
        res.json(productosFiltrados);
    } catch (error) {
        res.status(500).json({ error: 'Error al filtrar productos' });
    }
});

// GET - Obtener todas las categorías
router.get('/categorias', (req, res) => {
    try {
        const categorias = [...new Set(productos.map(p => p.categoria))];
        res.json(categorias);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener categorías' });
    }
});

// POST - Crear un nuevo producto (solo para desarrollo)
router.post('/productos', (req, res) => {
    try {
        const nuevoProducto = {
            id: Math.max(...productos.map(p => p.id)) + 1,
            ...req.body,
            stock: req.body.stock || 100
        };
        productos.push(nuevoProducto);
        res.status(201).json(nuevoProducto);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear producto' });
    }
});

// PUT - Actualizar un producto
router.put('/productos/:id', (req, res) => {
    try {
        const producto = productos.find(p => p.id === parseInt(req.params.id));
        if (!producto) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }
        
        Object.assign(producto, req.body);
        res.json(producto);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar producto' });
    }
});

// DELETE - Eliminar un producto
router.delete('/productos/:id', (req, res) => {
    try {
        const index = productos.findIndex(p => p.id === parseInt(req.params.id));
        if (index === -1) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }
        
        const productoEliminado = productos.splice(index, 1);
        res.json({ mensaje: 'Producto eliminado', producto: productoEliminado[0] });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar producto' });
    }
});

// GET - Health check
router.get('/health', (req, res) => {
    res.json({ status: 'API funcionando correctamente', timestamp: new Date() });
});

module.exports = router;
