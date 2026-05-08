// Script de AGROTECH - Tienda Agronómica
// Detectar si estamos en desarrollo o producción
const API_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
  ? 'http://localhost:3000/api'
  : `${window.location.origin}/api`;

console.log('🌱 AGROTECH Configurado para:', API_URL);

// Cargar productos cuando la página carga
document.addEventListener('DOMContentLoaded', () => {
    cargarProductos();
});

// Función para cargar productos desde el backend
async function cargarProductos() {
    try {
        const respuesta = await fetch(`${API_URL}/productos`);
        if (!respuesta.ok) throw new Error('Error al cargar productos');
        
        const productos = await respuesta.json();
        mostrarProductos(productos);
    } catch (error) {
        console.error('Error:', error);
        mostrarErrorProductos();
    }
}

// Función para mostrar productos en el DOM
function mostrarProductos(productos) {
    const contenedor = document.getElementById('productos-container');
    contenedor.innerHTML = '';
    
    productos.forEach(producto => {
        const tarjeta = crearTarjetaProducto(producto);
        contenedor.appendChild(tarjeta);
    });
}

// Función para crear una tarjeta de producto
function crearTarjetaProducto(producto) {
    const div = document.createElement('div');
    div.className = 'product-card';
    
    const precioFormato = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP'
    }).format(producto.precio);
    
    div.innerHTML = `
        <div class="product-image">
            <img src="${producto.imagen}" alt="${producto.nombre}" onerror="this.src='https://via.placeholder.com/500x500?text=${encodeURIComponent(producto.nombre)}'">
            <div class="product-badge">${producto.emoji}</div>
        </div>
        <div class="product-info">
            <div class="product-category">${producto.categoria}</div>
            <div class="product-name">${producto.nombre}</div>
            <div style="font-size: 12px; color: #666; margin: 8px 0;">${producto.descripcion}</div>
            <div class="product-price">${precioFormato}</div>
            <div class="product-stock" style="font-size: 12px; color: #2d7a2d; margin-top: 10px;">Stock: ${producto.stock} unidades</div>
            <button class="btn" style="width: 100%; margin-top: 15px; padding: 10px; font-size: 12px;">Agregar al carrito</button>
        </div>
    `;
    
    return div;
}

// Función auxiliar para oscurecer un color (ya no necesaria, se mantiene por compatibilidad)
function oscurecerColor(color) {
    return color;
}

// Función para mostrar error en carga de productos
function mostrarErrorProductos() {
    const contenedor = document.getElementById('productos-container');
    contenedor.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 40px;">
            <h3>No pudimos cargar los productos</h3>
            <p>Asegúrate de que el servidor backend esté corriendo en http://localhost:3000</p>
        </div>
    `;
}

console.log('AGROTECH tienda cargada exitosamente');
