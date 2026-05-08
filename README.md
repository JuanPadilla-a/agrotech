# 🌱 AGROTECH - Tienda Agronómica

Plataforma de e-commerce moderna para la venta de productos agronómicos. Construida con HTML5, CSS3, JavaScript Vanilla y Node.js/Express.

![AGROTECH](https://img.shields.io/badge/Status-Active-green) ![License](https://img.shields.io/badge/License-MIT-blue) ![Node.js](https://img.shields.io/badge/Node.js-18+-green) ![Express](https://img.shields.io/badge/Express-4.18-blue)

## 🎯 Características

- ✅ **Diseño Minimalista**: Interfaz limpia y moderna con colores verdes naturales
- ✅ **Responsive**: Compatible con dispositivos móviles, tablets y escritorio
- ✅ **Backend Robusto**: API REST con Node.js/Express
- ✅ **Base de Datos JSON**: 12 productos agronómicos de ejemplo
- ✅ **Imágenes Dinámicas**: Imágenes de alta calidad desde Unsplash
- ✅ **CORS Habilitado**: Conexión segura frontend-backend
- ✅ **Categorías Múltiples**: Semillas, Fertilizantes, Herramientas, Insumos

## 📁 Estructura del Proyecto

```
agrotech/
│
├── 📄 index.html              # Página principal
├── 🎨 style.css               # Estilos CSS
├── 📝 script.js               # JavaScript frontend
│
├── 📁 backend/                # Servidor Node.js
│   ├── server.js              # Express principal
│   ├── rutas.js               # Rutas API
│   ├── productos.js           # Datos de productos
│   ├── package.json           # Dependencias
│   └── package-lock.json
│
├── 📖 README.md               # Este archivo
├── 🚀 QUICK_START.md         # Inicio rápido
├── 📚 GITHUB_SETUP.md        # Subir a GitHub
└── .gitignore                # Archivos ignorados por Git
```

## 🚀 Inicio Rápido

### Requisitos Previos

- [Node.js](https://nodejs.org/) v14+ instalado
- [Git](https://git-scm.com/) instalado
- [Python 3](https://www.python.org/) para servidor web (opcional)

### Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/TU_USUARIO/agrotech.git
cd agrotech
```

2. **Instalar dependencias del backend**
```bash
cd backend
npm install
cd ..
```

### Ejecución

**Terminal 1 - Iniciar Backend:**
```bash
cd backend
npm start
```

El servidor estará disponible en `http://localhost:3000`

**Terminal 2 - Iniciar Frontend:**
```bash
python -m http.server 8000
```

Abre tu navegador en `http://localhost:8000`

## 📡 API Endpoints

### Productos

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| `GET` | `/api/productos` | Obtener todos los productos |
| `GET` | `/api/productos/:id` | Obtener producto por ID |
| `POST` | `/api/productos` | Crear nuevo producto |
| `PUT` | `/api/productos/:id` | Actualizar producto |
| `DELETE` | `/api/productos/:id` | Eliminar producto |

### Categorías

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| `GET` | `/api/categorias` | Obtener todas las categorías |
| `GET` | `/api/productos/categoria/:nombre` | Filtrar por categoría |

### Utilidades

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| `GET` | `/api/health` | Estado del servidor |
| `GET` | `/` | Información de la API |

## 📦 Ejemplo de Producto

```json
{
  "id": 1,
  "nombre": "Semillas de Maíz Premium",
  "categoria": "Semillas",
  "descripcion": "Semillas de maíz de alta calidad, rendimiento optimizado",
  "precio": 45000,
  "stock": 150,
  "color_primario": "#f4a460",
  "emoji": "🌽",
  "imagen": "https://images.unsplash.com/photo-..."
}
```

## 🛍️ Productos Disponibles

### Semillas 🌾
- Semillas de Maíz Premium
- Semillas de Tomate
- Semillas de Cebada
- Semillas de Papa Certificada

### Fertilizantes 🧬
- Abono Orgánico 50kg
- NPK 20-20-20 20kg

### Herramientas 🔧
- Pala de Jardín Profesional
- Rastrillo de Acero
- Manguera de Riego 50m

### Insumos 🧪
- Fungicida Agrícola 5L
- Insecticida Natural 10L
- Regulador de Crecimiento

## 🎨 Colores Principales

- **Verde Primario**: `#2d7a2d` (Botones y acentos)
- **Verde Oscuro**: `#234f23` (Hover)
- **Crema**: `#fafaf8` (Fondo)
- **Gris Oscuro**: `#2d4a2b` (Footer)

## 🔧 Tecnologías Utilizadas

### Frontend
- HTML5
- CSS3 (Grid, Flexbox)
- JavaScript Vanilla (ES6+)

### Backend
- Node.js v14+
- Express.js v4.18
- CORS middleware
- Body-Parser

### DevTools
- Git & GitHub
- npm (Node Package Manager)
- nodemon (auto-reload en desarrollo)

## 📚 Documentación Adicional

- 🚀 [QUICK_START.md](./QUICK_START.md) - Instrucciones de inicio rápido
- 📘 [backend/README.md](./backend/README.md) - Documentación del backend
- 🌐 [GITHUB_SETUP.md](./GITHUB_SETUP.md) - Cómo subir a GitHub

## 🤝 Contribuir

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el repositorio
2. Crea tu rama (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🙋 Soporte

¿Preguntas o problemas? Abre un [Issue](https://github.com/TU_USUARIO/agrotech/issues) en GitHub.

## 📞 Contacto

- 📧 Email: dev@agrotech.com
- 🌐 Website: www.agrotech.com
- 💼 LinkedIn: [AGROTECH](https://linkedin.com)

---

**Hecho con 💚 para agricultores modernos**

*Última actualización: Mayo 2026*
