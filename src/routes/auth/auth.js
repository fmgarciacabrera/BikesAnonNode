import { Router } from 'express';

export const authRouter = Router();

authRouter.post('/login', (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) throw new Error('Missing data');
    res.status(200).json({ user: email });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
