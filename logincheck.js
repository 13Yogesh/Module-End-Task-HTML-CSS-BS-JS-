document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === "test@netflix.com" && password === "password123") {
        alert("Login successful!");
    } else {
        alert("Invalid email or password.");
    }
});
