
const API_URL = "http://127.0.0.1:8000/api/members/";

const registerForm = document.getElementById("registerForm");
if (registerForm) {
    registerForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const customer = {
            
            username: document.getElementById("inputUsername").value,
            email: document.getElementById("inputEmail").value,
            password: document.getElementById("inputPassword").value,
            
        };

        fetch(API_URL + "register/", {
            method: "POST",
            headers: { 
                "Content-Type": "application/json"
            },
            body: JSON.stringify(customer)
        })
        .then(response => {
            if (response.ok) {
                // Redirect on successful registration
                window.location.href = "../sign-in/login.html"; 
            } else {
                return response.json().then(data => {
                    document.getElementById("errorMessage").innerText = "Failed to register: " + (data.detail || "Unknown error");
                });
            }
        })
        .catch(error => console.error("Failed to register:", error));
        
    });
}

//const token = localStorage.getItem("access_token");

//  REGISTER FUNCTION
/*
const registerCustomer = async () => {
    const customerData = {
        username: document.getElementById("inputUsername").value,
        email: document.getElementById("inputEmail").value,
        password: document.getElementById("inputPassword").value,
        
    };

    fetch(API_URL + 'register/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(customerData),
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("Failed to register");
        }
    })
    .then(data => {
         window.location.href = "../sign-in/login.html";
        console.log("Registration successful:", data);
    })
    .catch(error => {
        console.error("Error:", error);
    });
};
*/