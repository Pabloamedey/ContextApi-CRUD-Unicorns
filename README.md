# 🦄 CRUD de Usuarios - Node.js + React

Este proyecto implementa un sistema CRUD (Crear, Leer, Actualizar y Eliminar) de usuarios, utilizando:

- **Backend:** Node.js + Express (API REST)
- **Frontend:** React + Vite + PrimeReact
- **Validaciones:** Yup + Formik

---

## 📦 Requisitos

- Node.js ≥ 18.x
- npm ≥ 9.x

---

## 📁 Estructura del Proyecto

```bash
.
├── backend/              # Servidor Express (API REST)
│   ├── index.js
│   └── usuarios.js
│
├── frontend/             # Cliente React (Vite)
│   ├── index.html
│   ├── vite.config.js
│   └── src/
│       ├── App.jsx
│       ├── main.jsx
│       └── components/
│           ├── UsuarioForm.jsx
│           └── UsuarioLista.jsx
│
├── package.json          # Dependencias principales
└── README.md             # Este archivo
```

---

## 🚀 Instrucciones

### 1. Clonar el repositorio

```bash
git clone https://github.com/Pabloamedey/CRUD-Usuarios-NodeJs
cd CRUD-Usuarios-NodeJs
```

### 2. Instalar dependencias

```bash
npm install
```

Si el backend y frontend están separados:

```bash
cd backend && npm install
cd ../frontend && npm install
```

---

## 🧪 Correr el proyecto

### Backend (Express)
```bash
cd backend
node index.js
# Corre en http://localhost:3000
```

### Frontend (React + Vite)
```bash
cd frontend
npm run dev
# Corre en http://localhost:5173
```

---

## 🛣️ Endpoints de la API

| Método   | Endpoint                          | Descripción                  |
|----------|-----------------------------------|------------------------------|
| `GET`    | `http://localhost:3000/usuarios`  | Lista todos los usuarios     |
| `GET`    | `http://localhost:3000/usuarios/2`| Devuelve usuario con ID 2    |
| `POST`   | `http://localhost:3000/usuarios`  | Crea un nuevo usuario        |
| `PUT`    | `http://localhost:3000/usuarios/1`| Actualiza usuario con ID 1   |
| `DELETE` | `http://localhost:3000/usuarios/1`| Elimina usuario con ID 1     |

---

### 📥 Ejemplo de cuerpo JSON para POST/PUT

```json
{
  "nombre": "Juan Pérez",
  "email": "juan.perez@example.com",
  "edad": 28
}
```
---

## ✅ Validaciones

- `nombre`, `email`, `edad` son obligatorios.
- El `email` debe ser único y válido.
- Los errores se devuelven con mensajes claros (`400` o `404`).

---

## 🧰 Tecnologías Usadas

- **Frontend:** React 19, PrimeReact, Axios, Formik, Yup
- **Backend:** Node.js, Express
- **Dev:** ESLint, Vite

---

## 🧠 Autor

- Pablo 👨‍💻

---

## 📄 Licencia

Este proyecto es solo para fines educativos.
