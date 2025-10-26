import  { getConnection } from "../config/db.js";
import PDFDocument from "pdfkit";

export const generatePDFReport = async (req, res) => {
  const query = `select * from Productos`
  try {
    const pool = await getConnection();
    const result = await pool.request().query(query);

    const doc = new PDFDocument();
    res.setHeader('Content-Disposition', 'attachment; filename="report.pdf"');
    res.setHeader('Content-Type', 'application/pdf');

    doc.pipe(res);

    doc.fontSize(18).text('Product Report', { align: 'center' });
    doc.moveDown();

    result.recordset.forEach(p => {
      doc.fontSize(12).text(`Name: ${p.Nombre}`);
      doc.text(`Price: ${p.Precio}`);
      doc.text(`Category ID: ${p.IdCategoria}`);
      doc.moveDown();
    })

    doc.end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
}
