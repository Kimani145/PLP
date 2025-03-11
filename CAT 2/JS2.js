/**document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
});
// Select the theme toggle button
const themeToggleButton = document.querySelector("#theme-toggle");

// Add an event listener to toggle themesconst themeToggleButton = document.querySelector("#theme-toggle");
const themeIcon = document.querySelector("#theme-icon");

themeToggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeIcon.textContent = document.body.classList.contains("dark-theme") ? "☀️" : "🌙";
});*/

const themeToggleButton = document.querySelector("#theme-toggle");
const themeIcon = document.querySelector("#theme-icon");

// Set the default theme based on user preference
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
if (prefersDarkScheme) {
    document.body.classList.add("dark-theme");
    themeIcon.textContent = "☀️"; // Light mode icon
} else {
    document.body.classList.remove("dark-theme");
    themeIcon.textContent = "🌙"; // Dark mode icon
}

themeToggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeIcon.textContent = document.body.classList.contains("dark-theme") ? "☀️" : "🌙";
});
 
/*Header Effects*/
const greeting = document.querySelector('.greeting');
const now = new Date();
const hours = now.getHours();
if (hours < 12) {
    greeting.textContent = 'Good Morning';
} else if (hours < 18) {
    greeting.textContent = 'Good Afternoon';
} else {
    greeting.textContent = 'Good Evening';
}
/*Paralaax Effect*/
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.style.backgroundPositionY = `${window.scrollY * 0.5}px`;
});

/*Form Validation*/
const form = document.querySelector('form');
const name = document.querySelector('input[type="text"]');
const email = document.querySelector('input[type="email"]');
const phone = document.querySelector('input[type="tel"]');
const submitButton = document.querySelector('input[type="submit"]');

fetch('https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=your_location')
    .then(response => response.json())
    .then(data => {
        document.querySelector('.weather').textContent = `It's ${data.current.temp_c}°C and ${data.current.condition.text}`;
    });
