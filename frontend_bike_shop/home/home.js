


// Assume this function checks if the user is logged in
function isUserLoggedIn() {
    // Replace this with your actual logic to check if the user is logged in

   // Check if the access token exists in localStorage
   const token = localStorage.getItem('access_token');
   return !!token; // Returns true if the token exists, false otherwise
    
}


// Function to update the menu based on login status
function updateMenu() {
    //const loginItem = document.getElementById('login-item');
    //const logoutItem = document.getElementById('logout-item');
    const login =document.getElementById("login");
    const register =document.getElementById("register");
    const logout =document.getElementById("logout");

    if (isUserLoggedIn()) {
        // User is logged in, show logout and hide login
        login.style.display = 'none';
        register.style.display = 'none';
        logout.style.display = 'block';
    } else {
        // User is not logged in, show login and hide logout
        login.style.display = 'block';
        register.style.display = 'block';
        logout.style.display = 'none';
    }
}

// Call the function to update the menu when the page loads
updateMenu();