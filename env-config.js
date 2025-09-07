// This script injects environment variables into the frontend
// It should be included before any other scripts in HTML files

(function() {
  // Default values for local development
  window.API_URL = 'http://localhost:3000';
  window.FRONTEND_URL = 'http://localhost:8000';
  
  // Check if we're in a production environment (Vercel)
  if (window.location.hostname !== 'localhost') {
    // In production, use the same origin for API calls
    window.API_URL = window.location.origin;
    window.FRONTEND_URL = window.location.origin;
  }
  
  console.log('Environment configured:', {
    API_URL: window.API_URL,
    FRONTEND_URL: window.FRONTEND_URL
  });
})();