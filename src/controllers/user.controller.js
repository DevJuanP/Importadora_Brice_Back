import { getConnection } from "../config/db.js";

export const getUsers = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query('SELECT * FROM Usuarios');
    res.json(result.recordset);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.error(error);
  }
}