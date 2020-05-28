import { Router, Request, Response } from 'express';

const router = Router();

// GET - users
router.get('/', async (req: Request, res: Response) => {
  // TO DO
  const result : string[] = [];
  res.status(200).json({ users: result });
});

// GET - users/:id
router.get('/:id', async (req: Request, res: Response) => {
  // TO DO
  const result : string = '';
  res.status(200).json({ user: result });
});

// POST - users
router.post('/', async (req: Request, res: Response) => {
  // TO DO
  res.status(201).json();
});

export default router;
