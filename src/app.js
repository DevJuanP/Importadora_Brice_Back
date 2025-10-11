import express from 'express';
import cors from 'cors';
import userRoutes from './routes/user.routes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('servidor en linea');
})

app.use('/users', userRoutes)
/*app.use('/product', productRoutes)
app.use('/category', categoryRoutes)*/

export default app;
