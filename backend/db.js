import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

// If running locally, use LOCAL_ variables, else use Railway's
const isLocal = process.env.NODE_ENV !== "production";

const connection = mysql.createConnection({
  host: isLocal ? process.env.LOCAL_MYSQLHOST : process.env.MYSQLHOST,
  user: isLocal ? process.env.LOCAL_MYSQLUSER : process.env.MYSQLUSER,
  password: isLocal ? process.env.LOCAL_MYSQLPASSWORD : process.env.MYSQLPASSWORD,
  database: isLocal ? process.env.LOCAL_MYSQLDATABASE : process.env.MYSQLDATABASE,
  port: isLocal ? process.env.LOCAL_MYSQLPORT : process.env.MYSQLPORT
});

connection.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed:", err);
  } else {
    console.log("✅ Connected to MySQL database");
  }
});

export default connection;
