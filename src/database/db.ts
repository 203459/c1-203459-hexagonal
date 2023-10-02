import pgPromise, { IDatabase, IMain } from 'pg-promise';
import dotenv from 'dotenv';

dotenv.config(); // Cargar variables de entorno desde el archivo .env

const pgp: IMain = pgPromise({});

const config = {
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432', 10),
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
};

const db: IDatabase<any> = pgp(config);

// Define funciones para interactuar con la base de datos aquí

export {db};
