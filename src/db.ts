import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is not set in environment variables.");
}

const pool = new Pool({
  connectionString,
});

pool.on("connect", () => {
  console.log("Connected to Postgres");
});

pool.on("error", (err) => {
  console.log("Error occured :", err);
});

export default pool;
