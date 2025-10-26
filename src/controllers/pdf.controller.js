import  { getConnection } from "../config/db.js";
import PDFDocument from "pdfkit";

export const generatePDFReport = async (req, res) => {
  const query = `SELECT 
    p.IdProducto,
    p.Nombre AS Producto,
    p.Descripcion,
    p.Precio,
    p.Stock,
    p.ImagenURL,
    c.Nombre AS Categoria,
    c.Descripcion AS DescripcionCategoria
    FROM Productos p
    INNER JOIN Categorias c ON p.IdCategoria = c.IdCategoria;`
    
  console.log('alistando reporte')
  try {
    const pool = await getConnection();
    const result = await pool.request().query(query);

    const doc = new PDFDocument();
    res.setHeader('Content-Disposition', 'attachment; filename="report.pdf"');
    res.setHeader('Content-Type', 'application/pdf');

    doc.pipe(res);

    doc.fontSize(18).text('Product Report', { align: 'center' });
    doc.moveDown();

    /*result.recordset.forEach(p => {
      doc.fontSize(12).text(`Name: ${p.Nombre}`);
      doc.text(`Price: ${p.Precio}`);
      doc.text(`Category ID: ${p.IdCategoria}`);
      doc.moveDown();
    })*/

    result.recordset.forEach((p, i) => {
      doc
        .fontSize(14)
        .fillColor('#1a1a1a')
        .text(`${i + 1}. ${p.Producto}`, { underline: true });

      doc
        .fontSize(11)
        .fillColor('#333')
        .text(`Categoría: ${p.Categoria}`)
        .text(`Precio: S/. ${p.Precio.toFixed(2)}`)
        .text(`Stock: ${p.Stock}`)
        .text(`Descripción: ${p.Descripcion || 'Sin descripción'}`)
        .moveDown(1.2);

      // Línea separadora entre productos
      doc
        .strokeColor('#cccccc')
        .lineWidth(0.5)
        .moveTo(doc.x, doc.y)
        .lineTo(doc.page.width - doc.page.margins.right, doc.y)
        .stroke()
        .moveDown();
    });

    doc.end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
}
