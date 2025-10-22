import express from 'express';
import cors from 'cors';
import userRoutes from './routes/user.routes.js';
import bannerRoutes from './routes/banner.routes.js';
import productsRoutes from './routes/products.router.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('servidor en linea');
})

app.use('/users', userRoutes)
/*app.use('/product', productRoutes)
app.use('/category', categoryRoutes)*/

app.use('/banner', bannerRoutes)

app.use('/productos', productsRoutes);

export default app;
