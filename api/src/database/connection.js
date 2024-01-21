import sql from "mssql";
import config from "../config";

const dbConfig = {
  user: config.dbUser,
  password: config.dbPassword,
  server: config.dbServer,
  database: config.dbDatabase,
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
};

export async function getConnection() {
  try {
    const pool = await sql.connect(dbConfig);
    console.log("Conexión exitosa a la base de datos");
    return pool;
  } catch (error) {
    console.error("Error al conectar a la base de datos: ", error);
  }
}

export async function closeConnection() {
  try {
    await sql.close();
    console.log("Conexión cerrada correctamente");
  } catch (error) {
    console.error("Error al cerrar la conexión: ", error);
  }
}

export { sql };
