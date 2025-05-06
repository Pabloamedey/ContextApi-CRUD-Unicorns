# 🦄 Unicorn CRUD con React + PrimeReact

## 📋 Descripción del Proyecto
Este es un proyecto CRUD (Create, Read, Update, Delete) de Unicornios hecho con React, PrimeReact y Vite. Permite la gestión completa de un listado de unicornios, utilizando una API externa de tipo REST para almacenamiento temporal.

## 🚀 Tecnologías Utilizadas
- ⚛️ React + Vite
- 🎨 PrimeReact
- 🌍 React Router DOM
- 🌐 API externa: [crudcrud.com](https://crudcrud.com)
- 🧠 Hooks: `useState`, `useEffect`

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
└── unicorns/
    ├── index.jsx              # Exporta UnicornsContainer
    ├── UnicornsContainer.jsx # Contiene la lógica del CRUD
    └── UnicornsView.jsx       # Vista, inputs, tabla, botones
```

## 🔄 Funcionalidad CRUD
- **Create**: Agrega unicornios con un formulario.
- **Read**: Muestra los unicornios en una tabla.
- **Update**: Permite editar unicornios seleccionados.
- **Delete**: Elimina unicornios seleccionados.

## 🧭 Navegación con Rutas
Usamos `react-router-dom` para manejar rutas:
- `/unicornios` → Vista principal del módulo.

## ⚙️ Requisitos Técnicos
- Uso de `useEffect` para obtener datos de la API al montar el componente.
- Manejo de estado con `useState`.
- Comunicación entre componentes mediante props.
- Código modular, limpio y documentado.

## 💅 Estilo y UX
- Tema oscuro personalizado para mejor visualización.
- Uso de componentes accesibles y responsivos con PrimeReact.

## 🐞 Manejo de Errores
- Control de errores en fetch: try-catch / .catch()
- Validaciones básicas en formularios

## 🧪 Cómo Ejecutarlo
1. Clona el repositorio:
```bash
git clone https://github.com/tu_usuario/tu_repo.git
cd tu_repo
```
2. Instala dependencias:
```bash
npm install
```
3. Ejecuta el proyecto:
```bash
npm run dev
```
4. Asegúrate de tener un endpoint único de `crudcrud.com` y reemplazarlo en `UnicornsContainer.jsx`
---

## ✨ Extras (Puntos Opcionales)
- Navegación entre rutas
- Validaciones de formularios
- Estilo visual mejorado
- Manejo de errores de la API

---

¡Buena suerte y que la magia de los unicornios los acompañe! 🦄

