const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const users = [];

app.post('/signup', (req, res) => {
  const { email, password } = req.body;

  const existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const newUser = { email, password };
  users.push(newUser);

  res.status(201).json({ message: 'User registered successfully' });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const user = users.find((user) => user.email === email);

  if (!user || user.password !== password) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  res.status(200).json({ message: 'Login successful' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
