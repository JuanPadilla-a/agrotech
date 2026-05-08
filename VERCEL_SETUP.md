# 🚀 Desplegar AGROTECH en Vercel

Guía completa para desplegar tu tienda agronómica en Vercel (hosting gratuito y rápido).

## 📋 Opción 1: Deploy del Backend + Frontend en Vercel

### Requisitos Previos

1. Cuenta en [Vercel](https://vercel.com) (crea una con tu GitHub)
2. Git instalado
3. Proyecto subido a GitHub ✅

## 🔧 Paso 1: Configurar `vercel.json`

Crea un archivo `vercel.json` en la raíz del proyecto:

```json
{
  "buildCommand": "cd backend && npm install",
  "outputDirectory": "backend",
  "rewrites": [
    {
      "source": "/api/(.*)",
      "destination": "backend/server.js"
    },
    {
      "source": "/(.*)",
      "destination": "./index.html"
    }
  ],
  "env": {},
  "functions": {
    "backend/server.js": {
      "memory": 1024,
      "maxDuration": 60
    }
  }
}
```

## 📄 Paso 2: Crear archivo `.vercelignore`

```
node_modules
.git
.gitignore
README.md
GITHUB_SETUP.md
QUICK_START.md
```

## 🚀 Paso 3: Desplegar en Vercel

### Opción A: Desde GitHub (Recomendado)

1. Ve a [vercel.com](https://vercel.com)
2. Haz clic en **"Import Project"**
3. Selecciona **"Import Git Repository"**
4. Busca y selecciona tu repositorio `agrotech`
5. Vercel detectará automáticamente la configuración
6. Haz clic en **"Deploy"**

### Opción B: Desde CLI (Terminal)

```powershell
# Instalar Vercel CLI globalmente
npm install -g vercel

# Ir al directorio del proyecto
cd "c:\Users\lapan\OneDrive\Documentos\Projectos VSC\IPHONE IOS"

# Hacer login
vercel login

# Desplegar
vercel

# Desplegar a producción
vercel --prod
```

## ✅ Después del Deploy

Una vez deployado, tendrás:

```
Frontend:  https://your-project.vercel.app
Backend:   https://your-project.vercel.app/api
```

## 🔗 URLs de tu API en Vercel

```
GET    https://your-project.vercel.app/api/productos
GET    https://your-project.vercel.app/api/categorias
GET    https://your-project.vercel.app/api/health
POST   https://your-project.vercel.app/api/productos
PUT    https://your-project.vercel.app/api/productos/:id
DELETE https://your-project.vercel.app/api/productos/:id
```

## 🔄 Actualizar Script del Frontend

Actualiza `script.js` para usar la URL de Vercel:

```javascript
// Cambiar de:
const API_URL = 'http://localhost:3000/api';

// A:
const API_URL = 'https://your-project.vercel.app/api';
```

O mejor aún, detectar automáticamente:

```javascript
const API_URL = window.location.hostname === 'localhost' 
  ? 'http://localhost:3000/api'
  : 'https://your-project.vercel.app/api';
```

## 📝 Opción 2: Backend en Vercel + Frontend en GitHub Pages

### Backend en Vercel

1. Crea una carpeta separada para el backend: `agrotech-backend`
2. Mueve la carpeta `backend/` allí
3. Crea su propio repositorio en GitHub
4. Deploy como se describe arriba

### Frontend en GitHub Pages

1. En los Settings de tu repositorio
2. Busca "Pages" en el menú izquierdo
3. Selecciona "Deploy from a branch"
4. Elige rama `main` y carpeta `root`
5. Tu frontend estará en: `https://juanpadilla-a.github.io/agrotech`

## 🌍 Opciones de Dominio Personalizado

### Registrar Dominio

1. Compra un dominio en [Namecheap](https://www.namecheap.com), [GoDaddy](https://www.godaddy.com), etc.

### Conectar en Vercel

1. En tu proyecto en Vercel → Settings → Domains
2. Agrega tu dominio personalizado
3. Sigue las instrucciones de DNS
4. Espera 24-48 horas para propagación

## 📊 Variables de Entorno (para después)

Si necesitas agregar variables en el futuro:

1. En Vercel → Settings → Environment Variables
2. Agrega tus variables
3. Redeploy automático

Ejemplo:
```
DATABASE_URL=tu_base_de_datos
API_KEY=tu_api_key
```

## 🔍 Monitorear Deploy

### En Vercel Dashboard

- Ver logs del deploy
- Historial de deployments
- Analíticas del sitio
- Métricas de rendimiento

### Ver Logs en Vivo

```bash
vercel logs https://your-project.vercel.app
```

## 🚨 Solución de Problemas

### Error: "Build failed"

```bash
# Verifica localmente
npm install
cd backend
npm start
```

### Error: "Cannot GET /"

- Asegúrate de que `vercel.json` está en la raíz
- Reinstall dependencies: `vercel build`

### CORS Errors

Vercel configura CORS automáticamente. Si aún tienes problemas:

En `backend/server.js`:
```javascript
app.use(cors({
  origin: ['https://your-project.vercel.app'],
  credentials: true
}));
```

## 📈 Mejoras para Producción

Agrega esto a tu `vercel.json`:

```json
{
  "headers": [
    {
      "source": "/api/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=3600"
        }
      ]
    }
  ]
}
```

## 🎯 Checklist Final

- ✅ Proyecto en GitHub
- ✅ `vercel.json` creado
- ✅ Backend funciona localmente
- ✅ Frontend conecta con API
- ✅ Variables de entorno configuradas (si necesarias)
- ✅ Deploy exitoso en Vercel
- ✅ URLs de API actualizadas en frontend
- ✅ Dominio personalizado (opcional)

## 📚 Links Útiles

- [Documentación Vercel](https://vercel.com/docs)
- [Desplegar Node.js en Vercel](https://vercel.com/docs/concepts/nodejs)
- [Preguntas Frecuentes](https://vercel.com/support)

## 💡 Tips

- Vercel ofrece **SSL gratis** (HTTPS)
- **Redeploy automático** cuando haces push a GitHub
- **Ambientes de preview** para cada Pull Request
- **Escalabilidad automática** sin configuración

---

**¡Tu tienda estará en línea en minutos!** 🌐

Tu URL en Vercel será: `https://agrotech-XXXXXX.vercel.app`

(El XXXXXX se genera automáticamente)
