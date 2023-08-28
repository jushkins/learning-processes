import mysql from "mysql2";

const pool = mysql.createPool({
  host: "localhost",
  user: "jushkin",
  password: "George.101",
  database: "googleforms",
  connectionLimit: 10, // Adjust as needed
});
export default pool;
