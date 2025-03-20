
document.addEventListener('DOMContentLoaded', function() {
  // Check if user is logged in
  auth.onAuthStateChanged((user) => {
    if (user) {
      // User is signed in
      console.log("Dashboard: User is signed in", user.email);
      
      // Get user info from Firestore
      db.collection('users').doc(user.uid).get().then((doc) => {
        if (doc.exists) {
          const userData = doc.data();
          
          // Update UI with user info
          const welcomeUser = document.getElementById('welcomeUser');
          const userName = document.getElementById('userName');
          
          if (welcomeUser) {
            welcomeUser.textContent = userData.firstName || user.email.split('@')[0];
          }
          
          if (userName) {
            userName.textContent = userData.firstName ? `${userData.firstName} ${userData.lastName}` : user.email;
            
            // Update initials in the avatar
            const userInitials = document.querySelector('.rounded-full');
            if (userInitials) {
              userInitials.textContent = userData.firstName ? 
                `${userData.firstName[0]}${userData.lastName[0]}` : 
                user.email[0].toUpperCase();
            }
          }
        }
      }).catch((error) => {
        console.error("Error getting user document:", error);
      });
      
      // Set up sign out button
      const signOutButton = document.getElementById('signOutButton');
      if (signOutButton) {
        signOutButton.addEventListener('click', (e) => {
          e.preventDefault();
          auth.signOut().then(() => {
            console.log("User signed out");
            window.location.href = 'login.html';
          }).catch((error) => {
            console.error("Sign out error:", error);
          });
        });
      }
      
      // Initialize charts
      initCharts();
      
    } else {
      // User is not signed in, redirect to login
      window.location.href = 'login.html';
    }
  });
  
  // Initialize charts with sample data
  function initCharts() {
    // Spending Overview Chart (Doughnut)
    const spendingCtx = document.getElementById('spendingChart');
    if (spendingCtx) {
      new Chart(spendingCtx, {
        type: 'doughnut',
        data: {
          labels: ['Housing', 'Food', 'Transportation', 'Entertainment', 'Other'],
          datasets: [{
            data: [35, 25, 15, 10, 15],
            backgroundColor: [
              '#FFD700', // Yellow (Primary)
              '#FF6B6B', // Red
              '#4ECDC4', // Teal
              '#4A6FA5', // Blue
              '#9966CC'  // Purple
            ],
            borderWidth: 0
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'right'
            }
          }
        }
      });
    }
    
    // Income vs Expenses Chart (Bar)
    const incomeExpenseCtx = document.getElementById('incomeExpenseChart');
    if (incomeExpenseCtx) {
      new Chart(incomeExpenseCtx, {
        type: 'bar',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [
            {
              label: 'Income',
              data: [4500, 4200, 4800, 5000, 4850, 5200],
              backgroundColor: '#4BB543', // Green
              borderWidth: 0
            },
            {
              label: 'Expenses',
              data: [3200, 3100, 2800, 3000, 2360, 2900],
              backgroundColor: '#FF6B6B', // Red
              borderWidth: 0
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                callback: function(value) {
                  return '$' + value;
                }
              }
            }
          }
        }
      });
    }
  }
});
