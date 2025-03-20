
document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');
  const errorMessage = document.getElementById('errorMessage');
  
  // Handle form submission
  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get input values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Clear previous error messages
    errorMessage.textContent = '';
    errorMessage.classList.add('hidden');
    
    // Sign in with email and password
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("User signed in:", user.email);
        window.location.href = 'dashboard.html';
      })
      .catch((error) => {
        // Handle errors
        const errorCode = error.code;
        let errorText = error.message;
        
        // Provide user-friendly error messages
        if (errorCode === 'auth/user-not-found') {
          errorText = 'No account found with this email address.';
        } else if (errorCode === 'auth/wrong-password') {
          errorText = 'Incorrect password. Please try again.';
        } else if (errorCode === 'auth/invalid-email') {
          errorText = 'Please enter a valid email address.';
        } else if (errorCode === 'auth/too-many-requests') {
          errorText = 'Too many failed login attempts. Please try again later.';
        }
        
        // Display error message
        errorMessage.textContent = errorText;
        errorMessage.classList.remove('hidden');
        console.error("Login error:", errorCode, errorText);
      });
  });
  
  // Add animation to form inputs
  const inputs = document.querySelectorAll('input[id]');
  
  inputs.forEach(input => {
    // Move label up when input is focused or has value
    input.addEventListener('focus', () => {
      const label = input.nextElementSibling;
      label.classList.add('-translate-y-7', 'text-xs', 'text-finblack');
    });
    
    input.addEventListener('blur', () => {
      const label = input.nextElementSibling;
      if (input.value === '') {
        label.classList.remove('-translate-y-7', 'text-xs', 'text-finblack');
      }
    });
    
    // Check on page load if input has value
    if (input.value !== '') {
      const label = input.nextElementSibling;
      label.classList.add('-translate-y-7', 'text-xs', 'text-finblack');
    }
  });
});
