import mssql from 'mssql';
import dotenv from 'dotenv';

dotenv.config();

const dbSettings = {
  user : process.env.DB_USER,
  password : process.env.DB_PASS,
  server : process.env.DB_SERVER,
  database : process.env.DB_NAME,
  options: {
    encrypt: true,
    trustServerCertificate: true
  }
}

export async function getConnection() {
  try {
    return await mssql.connect(dbSettings);
  } catch (error) {
    console.error(error);
  }
}

export { mssql };