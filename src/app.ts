import express, { Application, Request, Response } from 'express';
import healthRoutes from './routes/healthRoutes.js';

const app: Application = express();

app.use(express.json());

// Rota para a raiz (página inicial)
app.get('/', (req: Request, res: Response) => {
    res.send('API Node-Express de Allysson está online');
});

// Suas rotas modulares
app.use('/api', healthRoutes);

export default app;
