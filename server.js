const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Secret key for JWT
const JWT_SECRET = process.env.JWT_SECRET || 'perez-book-secret-key';

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:8000', // Updated to match the frontend server URL
  credentials: true
}));
app.use(bodyParser.json());
app.use(cookieParser());

// Path to users data file
const usersFilePath = path.join(__dirname, 'users.json');

// Create users file if it doesn't exist
if (!fs.existsSync(usersFilePath)) {
  fs.writeFileSync(usersFilePath, JSON.stringify({ users: [] }));
}

// Helper function to read users data
function readUsers() {
  try {
    const data = fs.readFileSync(usersFilePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading users file:', error);
    return { users: [] };
  }
}

// Helper function to write users data
function writeUsers(data) {
  try {
    fs.writeFileSync(usersFilePath, JSON.stringify(data, null, 2));
    return true;
  } catch (error) {
    console.error('Error writing users file:', error);
    return false;
  }
}

// Helper function to hash password with salt
function hashPassword(password) {
  // Generate a random salt
  const salt = crypto.randomBytes(16).toString('hex');
  // Hash the password with the salt
  const hash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
  // Return both the salt and hash
  return `${salt}:${hash}`;
}

// Helper function to verify password
function verifyPassword(password, hashedPassword) {
  // Split the stored hash into salt and hash
  const [salt, storedHash] = hashedPassword.split(':');
  // Hash the provided password with the same salt
  const hash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
  // Compare the hashes
  return storedHash === hash;
}

// Middleware to verify JWT token
function authenticateToken(req, res, next) {
  const token = req.cookies.token;
  
  if (!token) return res.status(401).json({ message: 'Authentication required' });

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid or expired token' });
    req.user = user;
    next();
  });
}

// Register endpoint
app.post('/register', (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }
  
  const userData = readUsers();
  
  // Check if user already exists
  if (userData.users.some(user => user.email === email)) {
    return res.status(409).json({ message: 'User already exists with this email' });
  }
  
  // Create new user
  const newUser = {
    id: Date.now().toString(),
    firstName: firstName || '',
    lastName: lastName || '',
    email,
    password: hashPassword(password),
    createdAt: new Date().toISOString()
  };
  
  userData.users.push(newUser);
  
  if (writeUsers(userData)) {
    // Don't send password back
    const { password, ...userWithoutPassword } = newUser;
    return res.status(201).json({ message: 'User registered successfully', user: userWithoutPassword });
  } else {
    return res.status(500).json({ message: 'Failed to register user' });
  }
});

// Login endpoint
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }
  
  const userData = readUsers();
  const user = userData.users.find(u => u.email === email && verifyPassword(password, u.password));
  
  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }
  
  // Create JWT token
  const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '24h' });
  
  // Set token in cookie
  res.cookie('token', token, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
    sameSite: 'strict'
  });
  
  // Don't send password back
  const { password: _, ...userWithoutPassword } = user;
  
  return res.status(200).json({
    message: 'Login successful',
    user: userWithoutPassword
  });
});

// Profile endpoint (protected)
app.get('/profile', authenticateToken, (req, res) => {
  const userData = readUsers();
  const user = userData.users.find(u => u.id === req.user.id);
  
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  
  // Don't send password back
  const { password, ...userWithoutPassword } = user;
  
  return res.status(200).json({ user: userWithoutPassword });
});

// Logout endpoint
app.post('/logout', (req, res) => {
  res.clearCookie('token');
  return res.status(200).json({ message: 'Logged out successfully' });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', environment: process.env.NODE_ENV });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});