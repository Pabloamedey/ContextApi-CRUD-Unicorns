
# 🦄 Unicorn CRUD con React + PrimeReact

## 📋 Descripción del Proyecto
Este es un proyecto CRUD (Create, Read, Update, Delete) de Unicornios y Productos hecho con React, PrimeReact y Vite. Permite la gestión completa de un listado de unicornios mediante una API externa (`crudcrud.com`), y un módulo adicional de productos con almacenamiento local (`localStorage`).

## 🚀 Tecnologías Utilizadas
- ⚛️ React + Vite
- 🎨 PrimeReact + PrimeIcons + PrimeFlex
- 🌍 React Router DOM
- 🌐 API externa: [crudcrud.com](https://crudcrud.com)
- 🧠 Hooks: `useState`, `useEffect`, `useContext`
- ✅ Formularios con Formik + Yup

## 🧩 Estructura del Unicornio
```json
{
  "name": "Twilight Sparkle",
  "data": {
    "color": "purple",
    "age": 100,
    "power": "Magic"
  }
}
```

## 📁 Estructura del Proyecto
```
src/
├── context/              # Contexto global para unicornios
├── unicorns/             # CRUD de unicornios: vistas, formularios, rutas
├── products/             # Módulo independiente para productos
├── App.jsx               # Ruteo principal
├── main.jsx              # Entrada de la app
├── index.css             # Estilos globales personalizados
```

## 🔄 Funcionalidades por Módulo

### 🦄 Módulo Unicornios
- **Create**: Crear nuevos unicornios usando un formulario con Formik + Yup.
- **Read**: Listado con PrimeReact DataTable.
- **Update**: Edición desde `/editar/:id`.
- **Delete**: Eliminación desde la vista principal.

### 🛒 Módulo Productos
- Gestión local con `localStorage`.
- Formulario propio (`ProductForm`) para agregar productos.
- Listado de productos con eliminación simple.

## 🧭 Navegación con Rutas
Usamos `react-router-dom` con rutas separadas por módulo:

- `/unicornios` → Ver listado
- `/unicornios/crear` → Crear nuevo unicornio
- `/unicornios/editar/:id` → Editar unicornio
- `/productos` → Vista de productos

## ⚙️ Requisitos Técnicos
- Context API para unicornios (`UnicornContext`)
- Rutas desacopladas por módulo
- Formularios con Formik + Yup (validaciones)
- Estilos con PrimeReact y CSS personalizado
- Almacenamiento local para productos

## 💅 Estilo y UX
- Tema oscuro elegante con variables CSS
- Navegación entre módulos con barra superior (`<nav>`)
- Animaciones suaves (`.fade-in`)
- Responsive con PrimeFlex

## 🐞 Manejo de Errores
- `try/catch` en llamadas fetch
- Alertas al usuario en caso de error
- Validaciones visuales en formularios

## 🧪 Cómo Ejecutarlo
1. Clona el repositorio:
```bash
git clone https://github.com/Pabloamedey/ContextApi-CRUD-Unicorns
cd ContextApi-CRUD-Unicorns
```
2. Instala dependencias:
```bash
npm install
```
3. Ejecuta el proyecto:
```bash
npm run dev
```
4. Reemplazá tu endpoint de `crudcrud.com` en `UnicornContext.jsx` (expira a las 24h)

---

## ✨ Extras
- Validaciones completas con Yup
- Navegación modular
- Persistencia con `localStorage`
- Estilos mágicos 🧙

---

¡Buena suerte y que la magia de los unicornios te acompañe! 🦄
