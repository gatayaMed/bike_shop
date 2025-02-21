const API_URL = "http://127.0.0.1:8000/api/members/";
const token = localStorage.getItem("access_token");

//  LOGIN FUNCTION
const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        fetch(API_URL + "token/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username: username, password: password })
        })
        .then(response => response.json())  // Convert response to JSON
        .then(data => {
            if (data.access) {
                localStorage.setItem("access_token", data.access);
                window.location.href = "../home/home.html"; // Redirect after login
            } else {
                document.getElementById("errorMessage").innerText = "Invalid credentials";
            }
        })
        .catch(error => console.error("Login Error:", error));
    });
}




//  LOGOUT FUNCTION
function logout() {
    // Remove the token from localStorage
    localStorage.removeItem('access_token');
    // Update the menu
    updateMenu();
    // Optionally, redirect the user to the login page
    window.location.href = "../home/home.html"; // Redirect to login page
}

// Attach the logout function to the logout button
//document.getElementById('logout').addEventListener('click', logout);