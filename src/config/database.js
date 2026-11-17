const { Pool } = require('pg');
require('dotenv').config();

// Railway provee DATABASE_URL automáticamente cuando agregas PostgreSQL
// En local usa las variables individuales del .env
const pool = process.env.DATABASE_URL
  ? new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false }, // requerido por Railway
    })
  : new Pool({
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT || 5432,
      user: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'nexus_dd',
    });

module.exports = pool;
