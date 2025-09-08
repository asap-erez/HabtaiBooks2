const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

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

app.use(express.static(path.join(__dirname, 'public')));

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

// REGISTER with Supabase
app.post('/register', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    const { data, error } = await supabase
      .from('users')
      .insert([{ first_name: firstName || '', last_name: lastName || '', email, password }])
      .select()
      .single();

    if (error) {
      return res.status(400).json({ message: error.message });
    }

    const token = jwt.sign({ id: data.id, email: data.email }, JWT_SECRET, { expiresIn: '24h' });
    res.cookie('token', token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
      sameSite: 'strict'
    });

    const { password: _, ...userWithoutPassword } = data;
    return res.status(201).json({ message: 'User registered successfully', user: userWithoutPassword });
  } catch (err) {
    console.error('Register error:', err);
    return res.status(500).json({ message: 'Server error' });
  }
});

// LOGIN with Supabase
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    const { data: user, error } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .single();

    if (error || !user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '24h' });
    res.cookie('token', token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
      sameSite: 'strict'
    });

    const { password: _, ...userWithoutPassword } = user;
    return res.status(200).json({ message: 'Login successful', user: userWithoutPassword });
  } catch (err) {
    console.error('Login error:', err);
    return res.status(500).json({ message: 'Server error' });
  }
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

// Delete account endpoint (protected)
app.delete('/account', authenticateToken, (req, res) => {
  const { password } = req.body;
  
  if (!password) {
    return res.status(400).json({ message: 'Password is required to delete account' });
  }
  
  const userData = readUsers();
  const userIndex = userData.users.findIndex(u => u.id === req.user.id);
  
  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' });
  }
  
  const user = userData.users[userIndex];
  
  // Verify password before deletion
  if (!verifyPassword(password, user.password)) {
    return res.status(401).json({ message: 'Invalid password' });
  }
  
  // Remove user from array
  userData.users.splice(userIndex, 1);
  
  if (writeUsers(userData)) {
    // Clear the authentication cookie
    res.clearCookie('token');
    return res.status(200).json({ message: 'Account deleted successfully' });
  } else {
    return res.status(500).json({ message: 'Failed to delete account' });
  }
});
// --- NEW: Supabase Reading Progress API ---
const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Save/update reading progress
app.post('/api/save-progress', async (req, res) => {
  const { email, current_page } = req.body;

  if (!email || current_page == null) {
    return res.status(400).json({ message: 'Email and current_page are required' });
  }

  try {
    const { data, error } = await supabase
      .from('reading_progress')
      .upsert({
        email,
        current_page,
        updated_at: new Date().toISOString()
      })
      .select();

    if (error) throw error;

    return res.status(200).json({ message: 'Progress saved', data });
  } catch (err) {
    console.error('Error saving progress:', err);
    return res.status(500).json({ message: 'Failed to save progress' });
  }
});

// Get reading progress for a specific user
app.get('/api/get-progress/:email', async (req, res) => {
  const { email } = req.params;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  try {
    const { data, error } = await supabase
      .from('reading_progress')
      .select('*')
      .eq('email', email)
      .single();

    if (error && error.code !== 'PGRST116') throw error; // PGRST116 = no row found

    return res.status(200).json({ data: data || { current_page: 1 } });
  } catch (err) {
    console.error('Error fetching progress:', err);
    return res.status(500).json({ message: 'Failed to fetch progress' });
  }
});
// --- END NEW ---

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', environment: process.env.NODE_ENV });
});


// Only start the server when running locally (node server.js)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

// Export the app for Vercel
module.exports = app;
