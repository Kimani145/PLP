const themeToggleButton = document.querySelector("#theme-toggle");
const themeIcon = document.querySelector("#theme-icon");
const greeting = document.querySelector(".greeting");
const form = document.querySelector("form");
const name = document.querySelector("input[type='text']");
const email = document.querySelector("input[type='email']");
const phone = document.querySelector("input[type='tel']");
const submitButton = document.querySelector("input[type='submit']");

// Theme Toggle with LocalStorage
const applyTheme = (theme) => {
    if (theme === "dark") {
        document.body.classList.add("dark-theme");
        themeIcon.textContent = "☀️";
    } else {
        document.body.classList.remove("dark-theme");
        themeIcon.textContent = "🌙";
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    applyTheme(savedTheme);
});

themeToggleButton.addEventListener("click", () => {
    const newTheme = document.body.classList.contains("dark-theme") ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
});

// Greeting Based on Time of Day
if (greeting) {
    const now = new Date();
    const hours = now.getHours();
    if (hours < 12) {
        greeting.textContent = "Good Morning";
    } else if (hours < 18) {
        greeting.textContent = "Good Afternoon";
    } else {
        greeting.textContent = "Good Evening";
    }
    greeting.style.color = hours < 12 ? "orange" : hours < 18 ? "blue" : "purple";
}

// Parallax Effect
const header = document.querySelector("header");
if (header) {
    window.addEventListener("scroll", () => {
        header.style.backgroundPositionY = `${window.scrollY * 0.5}px`;
    });
}

// Form Validation
form?.addEventListener("submit", (e) => {
    let isValid = true;
    if (!name?.value.trim()) {
        alert("Name is required");
        isValid = false;
    }
    if (!email?.value.includes("@")) {
        alert("Enter a valid email address");
        isValid = false;
    }
    if (!phone?.value.match(/^\d+$/)) {
        alert("Phone number must contain only digits");
        isValid = false;
    }
    if (!isValid) e.preventDefault();
});

// Weather API Integration
// Weather API Integration with Geolocation
const weatherElement = document.querySelector(".weather");

if (weatherElement) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            // Construct the API URL with dynamic coordinates
            const apiUrl = `https://api.weatherapi.com/v1/current.json?key=155f03c084b94ca489f175257252201&q=${lat},${lon}`;

            fetch(apiUrl)
                .then((response) => {
                    if (!response.ok) throw new Error("Failed to fetch weather data");
                    return response.json();
                })
                .then((data) => {
                    weatherElement.textContent = `It's ${data.current.temp_c}°C and ${data.current.condition.text}`;
                })
                .catch((error) => {
                    console.error(error);
                    weatherElement.textContent = "Weather data unavailable";
                });
        }, (error) => {
            console.error(error);
            weatherElement.textContent = "Location access denied. Weather data unavailable.";
        });
    } else {
        weatherElement.textContent = "Geolocation is not supported by this browser.";
    }
}

