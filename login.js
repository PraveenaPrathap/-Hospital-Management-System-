document.addEventListener("DOMContentLoaded", function () {
    // Default credentials
    const defaultUsername = "vinuveena21";
    const defaultPassword = "Vinu@2003";

    // Set default username and password in input fields
    document.getElementById("username").value = defaultUsername;
    document.getElementById("password").value = defaultPassword;

    // Login form submission
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent actual form submission

        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;

        if (username === defaultUsername && password === defaultPassword) {
            window.location.href = "appointment.html"; // Redirect to appointment page
        } else {
            alert("Invalid Username or Password!");
        }
    });
});

