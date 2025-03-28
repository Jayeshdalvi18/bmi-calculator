// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// home-script.js

function loginUser() {
    const username = document.getElementById('username').value;
    const gender = document.getElementById('gender').value;

    if (username && gender) {
        alert(`Welcome ${username}! Gender: ${gender}. Proceed to BMI Calculator.`);
        // Add functionality to redirect or enable access to the calculator
        window.location.href = "index.html"; // Redirect to the BMI Calculator page
    } else {
        alert("Please enter both username and gender.");
    }
}
