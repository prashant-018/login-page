import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// In-memory "DB"
const users = [];

export const registerUser = (req, res) => {
  const { email, password, role } = req.body;

  const userExists = users.find(u => u.email === email);
  if (userExists) return res.status(400).json({ message: 'User already exists' });

  const hashedPassword = bcrypt.hashSync(password, 8);
  users.push({ email, password: hashedPassword, role });

  res.status(201).json({ message: 'User registered successfully' });
};

export const loginUser = (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email);

  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ email: user.email, role: user.role }, 'secretKey', { expiresIn: '1h' });

  res.json({ token, user: { email: user.email, role: user.role } });
};

export const getDashboard = (req, res) => {
  res.json({ message: `Welcome to the ${req.user.role} dashboard, ${req.user.email}!` });
};
