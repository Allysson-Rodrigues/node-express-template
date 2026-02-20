import { Request, Response } from 'express';

// Logic for health check endpoint
export const getStatus = (req: Request, res: Response): void => {
    res.status(200).json({
        status: 'UP',
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
    });
};
