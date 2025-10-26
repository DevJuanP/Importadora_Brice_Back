import { Router } from "express";
import { generatePDFReport } from "../controllers/pdf.controller.js";

const router = Router();

router.get('/productos', generatePDFReport)

export default router;
