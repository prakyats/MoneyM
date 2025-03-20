
// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_BphB1fO2_g24Jj_SRtFAXBxUwK2OIzI",  // This is a demo key, replace with your Firebase API key
  authDomain: "vaultflow-demo.firebaseapp.com",
  projectId: "vaultflow-demo",
  storageBucket: "vaultflow-demo.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:123456789abcdef"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = firebase.auth();
const db = firebase.firestore();

// Check authentication state
auth.onAuthStateChanged((user) => {
  // Get current page
  const currentPage = window.location.pathname.split('/').pop();
  
  if (user) {
    // User is signed in
    console.log("User is signed in:", user.email);
    
    // If on login or register page, redirect to dashboard
    if (currentPage === 'login.html' || currentPage === 'register.html' || currentPage === 'index.html') {
      window.location.href = 'dashboard.html';
    }
  } else {
    // User is signed out
    console.log("User is signed out");
    
    // If on dashboard, redirect to login
    if (currentPage === 'dashboard.html') {
      window.location.href = 'login.html';
    }
  }
});
