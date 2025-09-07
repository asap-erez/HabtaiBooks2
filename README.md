# Perez's Book - Authentication System

This project is a simple book website with user authentication functionality.

## Features

- User registration and login
- Secure password storage with hashing
- JWT-based authentication
- Protected book content that requires login
- Responsive design
- Environment-based configuration for easy deployment

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation

1. Create a `.env` file in the root directory with the following variables:

   ```
   PORT=3000
   JWT_SECRET=your_secure_jwt_secret_key_here
   NODE_ENV=development
   FRONTEND_URL=http://localhost:8000
   API_URL=http://localhost:3000
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Start the development servers:

   ```bash
   # Start API server
   npm run dev

   # In a separate terminal, start the frontend server
   npm run serve
   ```

4. Access the application:
   - Open your browser and navigate to: `http://localhost:8000`
   - Register a new account
   - Login with your credentials
   - You'll be redirected to the book content

## Deployment to GitHub and Vercel

### 1. Push to GitHub

1. Create a new repository on GitHub at https://github.com/asap-erez/
2. Initialize and push your local repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/asap-erez/perez-book.git
   git push -u origin main
   ```

### 2. Deploy on Vercel

1. Sign up or log in to [Vercel](https://vercel.com)
2. Click "New Project" and import your GitHub repository
3. Configure the project:

   - Framework Preset: Other
   - Root Directory: ./
   - Build Command: npm run build
   - Output Directory: ./
   - Install Command: npm install

4. Add Environment Variables:

   - `JWT_SECRET`: Generate a secure random string
   - `NODE_ENV`: production
   - `FRONTEND_URL`: Your Vercel deployment URL (e.g., https://perez-book.vercel.app)
   - `API_URL`: Your Vercel deployment URL (e.g., https://perez-book.vercel.app)

5. Click "Deploy"

## File Structure

- `index.html` - The main book content (protected)
- `loginp.html` - Login and registration page
- `script.js` - Book navigation functionality
- `style.css` - Styling for the application
- `server.js` - Backend authentication server
- `users.json` - User data storage (created automatically)

## Authentication Flow

1. New users register with email and password
2. User credentials are stored securely with password hashing
3. On login, the server issues a JWT token stored in an HTTP-only cookie
4. Protected pages check for valid authentication before displaying content
5. Logout clears the authentication token

## Security Features

- Password hashing using SHA-256
- HTTP-only cookies for token storage
- JWT with expiration
- CORS protection
