# Registro de Actividad – Prueba Técnica Backend

Este proyecto implementa un sistema de registro y consulta de eventos clave de usuario durante una simulación laboral, como parte del desafío técnico para No Country.

## 🛠️ Tecnologías

- **Node.js** + **Express** (v5)
- **TypeScript**
- **Prisma** + **Supabase (PostgreSQL)**
- **Zod** para validación de datos
- **Dotenv** para manejo de variables de entorno


## 🔑 Funcionalidades

Registra y permite consultar eventos como:

- `login`
- `joinMeet`
- `sendMessage`
- `uploadDeliverable`
- `completeTask`

### Endpoints

- `POST /api/activities/`  
  Crear un evento

- `GET /api/activities/user/:userId`  
  Consultar eventos por usuario

- `GET /api/activities/team/:teamId`  
  Consultar eventos por equipo

- `GET /api/activities/simulation/:simulationId`  
  Consultar eventos por simulación

## 📁 Estructura del proyecto

```plaintext
simulacion-activity/
├── prisma/             # Definición del esquema Prisma
├── src/
│ ├── controllers/      # Lógica HTTP
│ ├── routes/           # Endpoints API
│ ├── services/         # Acceso a la base de datos
│ ├── middlewares/      # Validaciones y errores
│ ├── schemas/          # Validaciones Zod
│ ├── lib/              # Cliente Prisma
│ ├── app.ts            # Configuración de Express
│ └── index.ts          # Inicio del servidor
├── .gitignore
├── tsconfig.json
└── package.json
```


## 🚀 Instalación y ejecución

```bash
npm install
npx prisma generate
npx prisma migrate dev --name init
npm run dev
```

## 🔐 Variables de entorno

- Agregá un archivo .env en la raíz con:

```bash
DATABASE_URL=
SUPABASE_URL=
SUPABASE_ANON_KEY=
```

