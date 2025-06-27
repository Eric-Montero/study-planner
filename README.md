# Study Planner

Generador de rutina de estudio personalizable.  
Permite organizar materias y días de estudio de forma sencilla y visual, usando React, Next.js y estilos CSS puros.

---

## Requisitos

- Node.js 18+
- npm 9+

---

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Eric-Montero/study-planner.git
   cd study-planner/frontend
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

---

## Estructura del proyecto

```
frontend/
│
├── src/
│   ├── pages/
│   │   ├── index.js        # Página principal (React)
│   │   └── _app.js         # Importa CSS global
│   └── styles/
│       └── globals.css     # Estilos globales (CSS puro)
│
├── package.json
└── README.md
```

---

## Uso

1. Asegúrate de tener corriendo el backend en `http://localhost:8000` (o ajusta la URL en `index.js`).
2. Inicia el frontend:
   ```bash
   npm run dev
   ```
3. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## Personalización de estilos

- Todos los estilos están en `src/styles/globals.css`.
- Puedes modificar colores, fuentes y diseño desde ese archivo.
- El diseño es tipo carta, centrado, fondo oscuro y responsivo.

---

## Funcionalidades

- Agrega materias y asigna prioridad.
- Selecciona cuántos días a la semana puedes estudiar.
- Genera una rutina automática.
- Visualiza la rutina generada en una tarjeta moderna.

---

## Notas

- **No se usa Tailwind CSS**. Todo el diseño es con CSS puro.
- Si quieres usar Tailwind en el futuro, revisa la [documentación oficial](https://tailwindcss.com/docs/installation).

---

## Créditos

Desarrollado por [Eric-Montero].

---