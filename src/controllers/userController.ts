import type { Request, Response } from "express";
import pool from "../db.js";
import type { User } from "../types/user.js";

export const getUsers = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const result = await pool.query<User>(
      "SELECT id, username, email FROM users ORDER BY id ASC;"
    );
    res.status(200).json({ users: result.rows });
  } catch (error) {
    console.error("Failed to fetch users:", error);
    res.status(500).json({ message: "Failed to fetch users" });
  }
};
