import  { getConnection } from "../config/db.js";

export const getCategory = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query('SELECT * FROM Categorias');
    const nameCategory = result.recordset.map(category => category.Nombre);
    res.json(nameCategory);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.error(error);
  }
}

export const getAllProducts = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .query(
        `select P.Precio, P.Nombre, P.Img, C.Nombre as 'Categoria' from Productos P INNER JOIN Categorias C on P.IdCategoria = C.IdCategoria`
      );
    const products = result.recordset.map(p => {
      return {
        precio: p.Precio,
        nombre: p.Nombre,
        img: p.Img,
        categoria: p.Categoria,
      };
    })
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error, message: error.message });
    console.error(error);
  }
}

export const getProductsByCategory = async (req, res) => {
  const { category } = req.params;
  console.log('cat: ',category);
  if (!category) {
    return res.status(400).json({ message: 'Category parameter is required' });
  }
  try {

    const pool = await getConnection();
    const result = await pool.request().query(`select P.Precio, P.Nombre, P.Img, C.Nombre as 'Categoria' from Productos P INNER JOIN Categorias C on P.IdCategoria = C.IdCategoria WHERE C.Nombre = '${category}'`);
    const products = result.recordset.map(p => {
      return {
        precio: p.Precio,
        nombre: p.Nombre,
        img: p.Img,
        categoria: p.Categoria,
      };
    })
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error, message: error.message });
    console.error(error);
  }
}