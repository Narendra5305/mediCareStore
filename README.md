Medicare Store Frontend

Overview:
This frontend application is a React-based full-stack e-commerce platform inspired by Dermstore. It provides users with product browsing, secure authentication, cart management, and order placement features.

Features:
- Browse all products with filtering options
- User signup and login with JWT authentication
- Manage user profile and order history
- Cart management with Redux Toolkit for global state
- Navigation with React Router
- Admin capabilities for product and user management (admin role required)

Technologies Used:
- React.js
- Redux Toolkit
- React Router
- Axios for API requests
- JWT stored in localStorage for authentication persistence

Setup Instructions:
1. Run `npm install` to install dependencies.
2. Create a `.env` file with the backend API URL, e.g.:
   REACT_APP_API_URL=http://localhost:5000
3. Start the app with `npm start`.
4. Use the UI to interact with the backend REST API.

Note:
- Ensure the backend server is running and accessible.
- Authentication tokens are stored securely in localStorage.


