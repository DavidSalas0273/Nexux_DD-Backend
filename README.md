# Nexus DD Backend

API REST para autenticación y gestión de usuarios con Node.js, Express y PostgreSQL.

## Requisitos

- Node.js 18+
- PostgreSQL 14+

## Instalación

```bash
cd backend
npm install
```

## Configuración

1. Copia `.env.example` a `.env` y completa tus credenciales:

```bash
cp .env.example .env
```

2. Crea la base de datos en PostgreSQL:

```sql
CREATE DATABASE nexus_dd;
```

3. Inicializa las tablas:

```bash
npm run init-db
```

## Uso

```bash
# Producción
npm start

# Desarrollo (con auto-reload)
npm run dev
```
