import { Router, Request, Response } from 'express';
import User, { UserMap } from '../models/user';
import database from '../database';

const router = Router();

// GET - users
router.get('/', async (req: Request, res: Response) => {
  UserMap(database);
  const result = await User.findAll();
  res.status(200).json({ users: result });
});

// GET - users/:id
router.get('/:id', async (req: Request, res: Response) => {
  UserMap(database);
  const id = Number(req.params.id);
  const result = await User.findByPk(id);
  res.status(200).json({ user: result });
});

// POST - users
router.post('/', async (req: Request, res: Response) => {
  let newUser = req.body as User;
  UserMap(database);
  const result = await User.create(newUser);
  newUser = result.dataValues as User;
  res.status(201).json({ user: newUser });
});

export default router;
