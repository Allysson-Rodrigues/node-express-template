import express from 'express';
import healthRoutes from './routes/healthRoutes.js';

const app = express();

app.use(express.json());

// Rota para a raiz (página inicial)
app.get('/', (req, res) => {
  res.send('🚀 API Node-Express de Allysson está online!');
});

// Suas rotas modulares
app.use('/api', healthRoutes);

export default app;
