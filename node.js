const bcrypt = require('bcrypt');

// Beispielhafte Benutzerliste mit gehashten Passwörtern (für den ersten Lauf ungesichert)
const users = {
    'Max': '$2b$10$wC7wi5h3RczpF06QzFuO9OcbnaZ0Ekd/GYsW0WnGdmwV/5yzsAD/S', // Hash von
    'Luna': '$2b$10$wC7wi5h3RczpF06QzFuO9OcbnaZ0Ekd/GYsW0WnGdmwV/5yzsAD/S', // Hash von
    'Levi': '$2b$10$EDmPVNkRaAKmIhH2aJXvc.ez1xuH1rv8E/LuxDYj7JfyV/AxTE1CW', // Hash von 
    'Tamino': '$2b$10$3sEEMpv6lT2UlIie/gjcieZzNQpj5g5qqA5uCJY87ABbP9ZzGhKB.', // Hash von 
    'Ben': '$2b$10$wC7wi5h3RczpF06QzFuO9OcbnaZ0Ekd/GYsW0WnGdmwV/5yzsAD/S' // Hash von
};

// Funktion zum Hashen eines Passworts
async function hashPassword(password) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
}

// Beispielhafte Verwendung zum Erstellen der gehashten Passwörter
(async () => {
    console.log('Gehashtes Passwort für "PWvonMax":', await hashPassword('PWvonMax'));
    console.log('Gehashtes Passwort für "PWvonLuna":', await hashPassword('PWvonLuna'));
    console.log('Gehashtes Passwort für "Banane14":', await hashPassword('Banane14'));
    console.log('Gehashtes Passwort für "7871":', await hashPassword('7871'));
    console.log('Gehashtes Passwort für "PWvonBen":', await hashPassword('PWvonBen'));
})();

// Funktion zum Vergleich des Passworts beim Login
async function login(username, password) {
    if (users[username] && await bcrypt.compare(password, users[username])) {
        document.cookie = `username=${username}; path=/`;
        return true;
    }
    return false;
}

// Login-Formular-Event-Listener
document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const response = await fetch('https://rcs-4xuk.onrender.com/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });

    const result = await response.json();
    if (result.success) {
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'https://gitsiterc.github.io/RCS/home.html';
    } else {
        alert('Ungültiger Benutzername oder Passwort (versuchs doch nochmal. Wenns dann immer noch nicht klappt hast du n schlechtes gedächtnis. LOL)');
    }
});


document.addEventListener("DOMContentLoaded", function() {
    // Angenommen, der Benutzername wird in einem Cookie gespeichert
    var username = getCookie("username");

    if (username === "Max") {
        document.getElementById("content").innerHTML = `
            hier könnte Text stehen, muss er aber nicht... (in HTML)
        `;
    } else if (username === "Levi") {
        document.getElementById("content").innerHTML = `
            hier könnte Text stehen, muss er aber nicht... (in HTML)
        `;
    } else {
        document.getElementById("content").innerHTML = `
            hier könnte Text stehen, muss er aber nicht... (in HTML)
        `;
    }
});

function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
}
