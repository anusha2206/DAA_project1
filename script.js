// document.getElementById("signupForm").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent form submission
    
//     let username = document.getElementById("username").value;
//     let email = document.getElementById("email").value;
//     let password = document.getElementById("password").value;
    
//     if (username && email && password) {
//         localStorage.setItem("username", username);
//         window.location.href = "home.html"; // Redirect to home page
//     } else {
//         alert("Please fill in all fields");
//     }
// });

// document.addEventListener("DOMContentLoaded", function() {
//     let username = localStorage.getItem("username");
//     let userElement = document.getElementById("user");
//     if (userElement) {
//         userElement.textContent = username ? username : "Guest";
//     }
// });


document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    
    if (username && email && password) {
        localStorage.setItem("username", username);
        window.location.href = "home.html"; 
    } else {
        alert("Please fill in all fields");
    }
});

document.addEventListener("DOMContentLoaded", function() {
    let username = localStorage.getItem("username");
    let userElement = document.getElementById("user");
    if (userElement) {
        userElement.textContent = username ? username : "Guest";
    }
});
