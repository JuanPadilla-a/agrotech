# 🚀 INICIO RÁPIDO - AGROTECH

## Paso 1: Instalar dependencias

Abre PowerShell o CMD y ve a la carpeta backend:

```powershell
cd "c:\Users\lapan\OneDrive\Documentos\Projectos VSC\IPHONE IOS\backend"
npm install
```

## Paso 2: Iniciar el servidor backend

Desde la carpeta backend, ejecuta:

```powershell
npm start
```

Deberías ver:
```
🚀 Servidor escuchando en: http://localhost:3000
```

## Paso 3: Abrir el frontend

Opción A - Abre el archivo directamente en el navegador:
```
c:\Users\lapan\OneDrive\Documentos\Projectos VSC\IPHONE IOS\index.html
```

Opción B - O desde Windows PowerShell (en otra ventana):
```powershell
cd "c:\Users\lapan\OneDrive\Documentos\Projectos VSC\IPHONE IOS"
python -m http.server 8000
```
Luego abre: `http://localhost:8000`

## ✅ ¡Listo!

Deberías ver:
- ✅ La tienda AGROTECH cargada
- ✅ 12 productos agronómicos con emojis
- ✅ Colores verdes minimalistas
- ✅ Precios en COP
- ✅ Stock disponible

## 🔗 URLs importantes

- Frontend: `http://localhost:8000` (si usas python)
- Backend API: `http://localhost:3000`
- Todos los productos: `http://localhost:3000/api/productos`
- Salud del servidor: `http://localhost:3000/api/health`

## 🛑 Para detener

- Backend: Presiona `Ctrl+C` en la terminal
- Frontend: Cierra el navegador o `Ctrl+C` si está en localhost:8000

---

**¡Ahora tienes una tienda agronómica funcional!** 🌱
