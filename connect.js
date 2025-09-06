require("dotenv").config();
const sql = require("mssql");

const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  server: process.env.DB_HOST,
  options: {
    encrypt: true,                
    trustServerCertificate: false 
  }
};

async function getConnection() {
  try {
    const pool = await sql.connect(dbConfig);
    console.log("✅ Conexión a SQL Server (Azure) establecida");
    return pool;
  } catch (error) {
    console.error("❌ Error de conexión:", error.message);
    throw error;
  }
}

module.exports = { sql, getConnection };
