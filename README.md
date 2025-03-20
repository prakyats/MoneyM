
# VaultFlow - Financial Management Website

A modern, responsive financial management website built with HTML, Tailwind CSS, and Firebase integration.

## Features

- **User Authentication**: Secure login and registration using Firebase Authentication
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop devices
- **Modern UI**: Clean and professional interface with yellow and black color scheme
- **Dashboard**: Visual representation of financial data with charts
- **Firebase Integration**: Authentication and Firestore database for user data

## Pages

1. **Landing Page**: Introduction to VaultFlow and its features
2. **Login Page**: For existing users to sign in
3. **Registration Page**: For new users to create an account
4. **Dashboard**: Financial overview with charts and transactions

## Technologies Used

- HTML5
- Tailwind CSS
- JavaScript
- Firebase (Authentication & Firestore)
- Chart.js for data visualization

## Setup Instructions

1. **Clone the repository**
   ```
   git clone <repository-url>
   cd vaultflow
   ```

2. **Set up Firebase**
   - Create a Firebase project at [firebase.google.com](https://firebase.google.com)
   - Enable Authentication (Email/Password) and Firestore Database
   - Replace the Firebase configuration in `js/firebase-config.js` with your own Firebase project details:
   ```javascript
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_PROJECT_ID.appspot.com",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID"
   };
   ```

3. **Run the application**
   - Open `index.html` in your browser to view the website
   - For local development, you can use a simple HTTP server:
     ```
     npm install -g http-server
     http-server
     ```

## Project Structure

```
/
├── index.html           # Landing page
├── login.html           # Login page
├── register.html        # Registration page
├── dashboard.html       # User dashboard
├── js/
│   ├── firebase-config.js  # Firebase configuration
│   ├── login.js            # Login functionality
│   ├── register.js         # Registration functionality
│   └── dashboard.js        # Dashboard functionality and charts
└── README.md            # Project documentation
```

## Authentication Flow

1. **New User Registration**:
   - User enters personal information and creates password
   - System validates input and creates account in Firebase
   - User data is stored in Firestore database
   - User is automatically logged in and redirected to dashboard

2. **Existing User Login**:
   - User enters email and password
   - System authenticates with Firebase
   - Upon successful authentication, user is redirected to dashboard

3. **Session Management**:
   - Firebase handles session persistence
   - Authenticated users are redirected to dashboard when visiting login/register pages
   - Unauthenticated users are redirected to login when attempting to access dashboard

## Customization

- **Colors**: Edit the Tailwind configuration in the HTML files to change the color scheme
- **Content**: Modify the HTML to update text and imagery
- **Firebase**: Update the Firebase configuration to connect to your own Firebase project

## License

This project is licensed under the MIT License - see the LICENSE file for details.
