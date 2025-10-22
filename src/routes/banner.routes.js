import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
  res.json([
    'https://simple.ripley.com.pe/home/_next/image?url=https%3A%2F%2Fapi-pe.ripley.com%2Fexperience%2Fecommerce%2Frdex%2Fapi-image-interceptor%2Fv1%2Fimages%2FaPgSibpReVYa3i73_pe-dsk-sl2-fiebrefucsia-celulares-211025.webp&w=1920&q=100',
    'https://simple.ripley.com.pe/home/_next/image?url=https%3A%2F%2Fapi-pe.ripley.com%2Fexperience%2Fecommerce%2Frdex%2Fapi-image-interceptor%2Fv1%2Fimages%2FaPfof7pReVYa3imU_pe-dsk-sl4-fiebrefucsia-computo-211025.png&w=1920&q=100',
    'https://simple.ripley.com.pe/home/_next/image?url=https%3A%2F%2Fapi-pe.ripley.com%2Fexperience%2Fecommerce%2Frdex%2Fapi-image-interceptor%2Fv1%2Fimages%2FaPgPY7pReVYa3i7S_pe-dsk-sl6-fiebrefucsia-linea-blanca-211025.webp&w=1920&q=100'
  ])
})

export default router;