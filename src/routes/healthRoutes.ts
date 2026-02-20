import express, { Router } from 'express';
import { getStatus } from '../controllers/healthController.js';

const router: Router = express.Router();

// Define o caminho /health e associa ao método do controller
router.get('/health', getStatus);

export default router;
