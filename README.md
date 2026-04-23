# Octopus Coquinaria — Plataforma

Aplicación React + Vite + TypeScript + Tailwind con backend Supabase para el autodiagnóstico gastronómico y panel consultor.

## 🚀 Inicio rápido

```bash
npm install
cp .env.example .env.local   # completar con tus credenciales de Supabase
npm run dev
```

La app arranca en `http://localhost:5173`. Si no configurás Supabase, funciona en modo offline (solo `localStorage`).

## 🔐 Modelo de autenticación

Auth y roles viven en Supabase. El esquema público relevante:

- `auth.users` — usuarios con email+password o OAuth.
- `public.usuarios` — perfil extendido con columna `role` (`admin`, `consultant`, `manager`, `client`, `user`).
- `public.diagnosticos_express` — tabla de leads generados por el formulario público.
  - RLS: `anon` puede INSERTAR (formulario público); `admin` / `consultant` pueden SELECT; solo `admin` puede DELETE.

Rutas protegidas:

| Ruta              | Requisito                     |
| ----------------- | ------------------------------ |
| `/dashboard`      | sesión activa                  |
| `/deep-diagnostic`| sesión activa                  |
| `/admin/leads`    | rol `admin` o `consultant`     |

El check del rol en el cliente se hace con `useAuth()` consultando `public.usuarios.role`. La RLS en la DB es la fuente de verdad.

## ☁️ Configuración de Supabase

El schema ya existe en el proyecto `OCTOPUS COQUINARIA` (`hmyzuuujyurvyuusvyzp`). Si necesitás clonar el entorno en otro proyecto, el setup mínimo es:

1. Crear tabla `public.usuarios` con columna `role text`.
2. Crear tabla `public.diagnosticos_express` (columnas usadas por el código: `business_name`, `contact_name`, `contact_email`, `contact_phone`, `city`, `business_type`, `monthly_revenue`, `profile_name`, `status`, `score_global`, `score_financial`, `score_7p`, `cogs_percentage`, `labor_percentage`, `margin_percentage`, `source`, `full_data jsonb`).
3. Definir funciones: `is_admin()`, `is_admin_or_consultant()`, `get_auth_role()`.
4. Aplicar RLS:
   - `usuarios`: cada user puede SELECT su propia fila.
   - `diagnosticos_express`: INSERT público, SELECT/DELETE según rol.

## ⚙️ Variables de entorno

`.env.local` (no committear):

```env
VITE_SUPABASE_URL=https://TU-PROYECTO.supabase.co
VITE_SUPABASE_ANON_KEY=ey...
```

En Vercel: **Settings → Environment Variables**, agregar las dos. Redeploy.

## 📦 Deploy en Vercel

1. Push a GitHub.
2. Importar el repo en Vercel (detecta Vite automáticamente).
3. Cargar las env vars.
4. Deploy.

> Nota: la app usa `HashRouter`, las URLs son `/#/ruta`. El `vercel.json` tiene un rewrite catch-all que sobra mientras se use `HashRouter` — pendiente decidir si migrar a `BrowserRouter`.

## 🧪 Scripts

| Comando            | Qué hace                  |
| ------------------ | ------------------------- |
| `npm run dev`      | Dev server con HMR        |
| `npm run build`    | `tsc` + build de Vite     |
| `npm run preview`  | Preview del build local   |
