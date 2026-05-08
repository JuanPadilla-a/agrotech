# 🚀 Instrucciones para Subir a GitHub

Tu proyecto AGROTECH está listo para GitHub. Sigue estos pasos:

## 📋 Paso 1: Preparación en GitHub

1. Ve a [github.com](https://github.com)
2. Inicia sesión en tu cuenta (o crea una si no tienes)
3. Haz clic en el `+` en la esquina superior derecha
4. Selecciona **"New repository"**
5. Completa el formulario:

```
Repository name: agrotech
Description: Tienda agronómica con Frontend y Backend Node.js
Visibility: Public (o Private si prefieres)
```

6. ⚠️ **NO marques:** "Add a README file", "Add .gitignore", "Choose a license"
7. Haz clic en **"Create repository"**

## 🔗 Paso 2: Conectar Repositorio Local con GitHub

Después de crear el repo, GitHub te mostrará comandos. En PowerShell, ejecuta:

```powershell
cd "c:\Users\lapan\OneDrive\Documentos\Projectos VSC\IPHONE IOS"

# Agregar el repositorio remoto (copia la URL de tu repo)
git remote add origin https://github.com/TU_USUARIO/agrotech.git

# Renombrar rama a main (opcional pero recomendado)
git branch -M main

# Subir los archivos
git push -u origin main
```

### ⚠️ Reemplaza:
- `TU_USUARIO` con tu usuario de GitHub
- La URL completa la encontrarás en GitHub después de crear el repo

## 📝 Paso 3: Verificar en GitHub

1. Ve a tu repositorio en GitHub
2. Deberías ver todos los archivos del proyecto
3. Verifica que aparezcan:
   - 📁 `backend/` folder
   - 📄 `index.html`, `script.js`, `style.css`
   - 📖 `README.md`, `QUICK_START.md`

## 🔐 Paso 4: Configurar Token (si pide contraseña)

Si GitHub pide contraseña en el push, crea un **Personal Access Token**:

1. En GitHub: Settings → Developer settings → Personal access tokens → Generate new token
2. Dale permisos a `repo` (completo)
3. Copia el token generado
4. En PowerShell, cuando pida contraseña, pega el token

## 📤 Futuros Cambios

Para subir cambios futuros:

```powershell
cd "c:\Users\lapan\OneDrive\Documentos\Projectos VSC\IPHONE IOS"
git add .
git commit -m "Descripción del cambio"
git push
```

## ✅ Comandos Útiles Git

```powershell
# Ver estado
git status

# Ver historial
git log --oneline

# Ver repositorios remotos
git remote -v

# Ver rama actual
git branch
```

---

**¡Listo!** Tu proyecto estará en GitHub accesible desde cualquier lugar. 🌐
