# AGROTECH - Tienda Agronómica

Sistema de tienda online para productos agronómicos con frontend HTML/CSS/JavaScript y backend con Node.js/Express.

## 📁 Estructura del Proyecto

```
AGROTECH/
│
├── index.html          # Página principal del frontend
├── style.css           # Estilos CSS
├── script.js           # JavaScript del frontend
│
└── backend/            # Directorio del servidor
    ├── package.json    # Dependencias de Node.js
    ├── server.js       # Servidor Express
    ├── rutas.js        # Rutas de la API
    └── productos.js    # Base de datos de productos
```

## 🚀 Instalación y Uso

### 1. Instalar Dependencias del Backend

Navega a la carpeta `backend` e instala las dependencias:

```bash
cd backend
npm install
```

> **Nota:** Asegúrate de tener [Node.js](https://nodejs.org/) instalado en tu sistema.

### 2. Iniciar el Servidor Backend

```bash
npm start
```

O para desarrollo con auto-reload:

```bash
npm run dev
```

El servidor se ejecutará en `http://localhost:3000`

### 3. Abrir el Frontend

Abre el archivo `index.html` en tu navegador o usa un servidor web local:

```bash
python -m http.server 8000
```

Luego accede a `http://localhost:8000`

## 📡 API Endpoints

### Productos
- **GET** `/api/productos` - Obtener todos los productos
- **GET** `/api/productos/:id` - Obtener producto por ID
- **POST** `/api/productos` - Crear nuevo producto
- **PUT** `/api/productos/:id` - Actualizar producto
- **DELETE** `/api/productos/:id` - Eliminar producto

### Categorías
- **GET** `/api/categorias` - Obtener todas las categorías

### Utilidades
- **GET** `/api/health` - Verificar estado del servidor
- **GET** `/` - Información general de la API

## 📦 Estructura de Producto

```json
{
  "id": 1,
  "nombre": "Semillas de Maíz Premium",
  "categoria": "Semillas",
  "descripcion": "Semillas de maíz de alta calidad",
  "precio": 45000,
  "stock": 150,
  "color_primario": "#f4a460",
  "emoji": "🌽"
}
```

## 🎨 Características

✅ Diseño minimalista y responsivo
✅ Paleta de colores verde natural
✅ API REST completa
✅ Gestión de productos
✅ Carrito de compras integrado
✅ CORS habilitado para conexiones frontend

## 🛠️ Tecnologías

- **Frontend:** HTML5, CSS3, JavaScript Vanilla
- **Backend:** Node.js, Express.js, CORS
- **Data:** JSON en memoria (puede extenderse a BD)

## 📝 Notas

- Los productos se almacenan en memoria. Para persistencia, integra una base de datos como MongoDB o PostgreSQL.
- El CORS está habilitado en `*` para desarrollo. En producción, especifica dominios permitidos.

## 📞 Soporte

Para reportar problemas o sugerir mejoras, contacta al equipo de AGROTECH.

---

**Hecho con 🌱 para agricultores modernos**
