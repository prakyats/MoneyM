
document.addEventListener('DOMContentLoaded', function() {
  const registerForm = document.getElementById('registerForm');
  const errorMessage = document.getElementById('errorMessage');
  
  // Handle form submission
  registerForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get input values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const terms = document.getElementById('terms').checked;
    
    // Clear previous error messages
    errorMessage.textContent = '';
    errorMessage.classList.add('hidden');
    
    // Basic validation
    if (!terms) {
      errorMessage.textContent = 'You must accept the Terms of Service and Privacy Policy.';
      errorMessage.classList.remove('hidden');
      return;
    }
    
    if (password !== confirmPassword) {
      errorMessage.textContent = 'Passwords do not match.';
      errorMessage.classList.remove('hidden');
      return;
    }
    
    // Create user with email and password
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log("User registered:", user.email);
        
        // Add user details to Firestore
        return db.collection('users').doc(user.uid).set({
          firstName: firstName,
          lastName: lastName,
          email: email,
          createdAt: new Date(),
        });
      })
      .then(() => {
        console.log("User profile created in Firestore");
        window.location.href = 'dashboard.html';
      })
      .catch((error) => {
        // Handle errors
        const errorCode = error.code;
        let errorText = error.message;
        
        // Provide user-friendly error messages
        if (errorCode === 'auth/email-already-in-use') {
          errorText = 'An account with this email already exists.';
        } else if (errorCode === 'auth/invalid-email') {
          errorText = 'Please enter a valid email address.';
        } else if (errorCode === 'auth/weak-password') {
          errorText = 'Password is too weak. Please use at least 6 characters.';
        }
        
        // Display error message
        errorMessage.textContent = errorText;
        errorMessage.classList.remove('hidden');
        console.error("Registration error:", errorCode, errorText);
      });
  });
  
  // Add animation to form inputs
  const inputs = document.querySelectorAll('input[id]');
  
  inputs.forEach(input => {
    if (input.type !== 'checkbox') {
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
    }
  });
});
