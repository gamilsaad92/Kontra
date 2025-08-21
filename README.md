# Kontra Starter (Monorepo)

A batteries-included starter for a lending SaaS with:

- **ui/**: React + Vite + Tailwind (design matches the screenshot)
- **api/**: Express + Supabase integration
- **Workspaces**: npm workspaces for dev/build across both packages
- **Feature flags**, **RBAC scaffolding**, **OpenAPI spec**, **jobs**, **webhooks**, **audit logs**

> This is a scaffold with working examples and TODOs for you to extend.

## Quickstart

```bash
# 1) Use Node 18+
# 2) Install root deps (workspaces)
npm install

# 3) Fill env
cp api/.env.example api/.env

# 4) Start both servers
npm run dev
# UI at http://localhost:5173
# API at http://localhost:8080
```

## Folder Layout

```
kontra-starter/
  api/                 Express API + Supabase
  ui/                  React + Vite + Tailwind
  package.json         npm workspaces
  README.md
```

## Supabase

Create tables using `api/supabase/schema.sql` (or migrate manually). Add RLS as desired.

## OpenAPI

`api/src/openapi.json` is served at `/openapi.json` for quick integration.
