
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
            const userInitials = document.querySelector('#userInitials');
            if (userInitials) {
              userInitials.textContent = userData.firstName ? 
                `${userData.firstName[0]}${userData.lastName ? userData.lastName[0] : ''}`.toUpperCase() : 
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
      
      // Set up mobile menu toggle
      setupMobileMenu();
      
      // Add interactivity to transaction cards
      setupTransactionCards();
      
      // Add dynamic financial tips
      loadFinancialTips();
      
    } else {
      // User is not signed in, redirect to login
      window.location.href = 'login.html';
    }
  });
  
  // Mobile menu toggle functionality
  function setupMobileMenu() {
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuButton && mobileMenu) {
      mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }
  }
  
  // Add interactivity to transaction rows
  function setupTransactionCards() {
    const transactionRows = document.querySelectorAll('#transactionsTable tr');
    
    transactionRows.forEach(row => {
      row.addEventListener('click', () => {
        // In a real app, this would open transaction details
        // For demo purposes, add a highlight effect
        row.classList.add('bg-finyellow/10');
        setTimeout(() => {
          row.classList.remove('bg-finyellow/10');
        }, 500);
      });
    });
  }
  
  // Load financial tips
  function loadFinancialTips() {
    const tipsList = document.getElementById('tipsList');
    
    // In a real app, these would come from an API or database
    const additionalTips = [
      {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-finyellow" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>',
        title: 'Build an Emergency Fund',
        description: 'Aim to save 3-6 months of living expenses for unexpected emergencies.'
      },
      {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-finyellow" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>',
        title: 'Pay Off High-Interest Debt',
        description: 'Prioritize paying off credit cards and high-interest loans before investing.'
      }
    ];
    
    // Add additional tips
    if (tipsList && additionalTips.length > 0) {
      additionalTips.forEach(tip => {
        const tipElement = document.createElement('div');
        tipElement.className = 'bg-fingray rounded-xl p-5 hover:shadow-md transition-all duration-300 cursor-pointer transform hover:scale-[1.02]';
        tipElement.innerHTML = `
          <div class="flex items-start">
            <div class="bg-finyellow/20 p-3 rounded-lg mr-4">
              ${tip.icon}
            </div>
            <div>
              <h3 class="font-semibold text-lg mb-2">${tip.title}</h3>
              <p class="text-finblack/70">${tip.description}</p>
            </div>
          </div>
        `;
        
        // Add click event for tips
        tipElement.addEventListener('click', () => {
          // In a real app, this would show a modal with detailed information
          alert(`Tip: ${tip.title}\n\n${tip.description}`);
        });
        
        tipsList.appendChild(tipElement);
      });
    }
  }
  
  // Initialize charts with sample data
  function initCharts() {
    // Spending Overview Chart (Doughnut)
    const spendingCtx = document.getElementById('spendingChart');
    if (spendingCtx) {
      const spendingChart = new Chart(spendingCtx, {
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
              position: 'right',
              labels: {
                padding: 20,
                boxWidth: 12,
                font: {
                  size: 12
                }
              }
            },
            tooltip: {
              callbacks: {
                label: function(context) {
                  const label = context.label || '';
                  const value = context.parsed || 0;
                  return `${label}: ${value}%`;
                }
              }
            }
          },
          animation: {
            animateScale: true,
            animateRotate: true
          }
        }
      });
      
      // Add interactivity to the chart
      spendingCtx.onclick = function(evt) {
        const points = spendingChart.getElementsAtEventForMode(evt, 'nearest', { intersect: true }, true);
        
        if (points.length) {
          const firstPoint = points[0];
          const label = spendingChart.data.labels[firstPoint.index];
          const value = spendingChart.data.datasets[0].data[firstPoint.index];
          
          alert(`Category: ${label}\nPercentage: ${value}%`);
        }
      };
    }
    
    // Income vs Expenses Chart (Bar)
    const incomeExpenseCtx = document.getElementById('incomeExpenseChart');
    if (incomeExpenseCtx) {
      const incomeExpenseChart = new Chart(incomeExpenseCtx, {
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
          },
          plugins: {
            tooltip: {
              callbacks: {
                label: function(context) {
                  const label = context.dataset.label || '';
                  const value = context.parsed.y || 0;
                  return `${label}: $${value}`;
                }
              }
            }
          },
          animation: {
            duration: 1500,
            easing: 'easeOutQuart'
          }
        }
      });
      
      // Add interactivity to the chart
      incomeExpenseCtx.onclick = function(evt) {
        const points = incomeExpenseChart.getElementsAtEventForMode(evt, 'nearest', { intersect: true }, true);
        
        if (points.length) {
          const firstPoint = points[0];
          const label = incomeExpenseChart.data.labels[firstPoint.index];
          const datasetLabel = incomeExpenseChart.data.datasets[firstPoint.datasetIndex].label;
          const value = incomeExpenseChart.data.datasets[firstPoint.datasetIndex].data[firstPoint.index];
          
          alert(`Month: ${label}\n${datasetLabel}: $${value}`);
        }
      };
    }
  }
});
