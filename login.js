/*const users = {
    'Max': 'PWvonMax',
    'Luna': 'PWvonLuna',
    'Levi': 'Banane14',
    'Tamino': '7871',
    'Ben': 'PWvonBen'
};

function login(username, password) {
    if (users[username] && users[username] === password) {
        localStorage.setItem('loggedInUser', username);
        return true;
    }
    return false;
}
// Login-Formular-Event-Listener
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (users[username] && users[username] === password) {
        // Speichern des Login-Status im localStorage
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'home.html';
    } else {
        alert('Ungültiger Benutzername oder Passwort (versuchs doch nochmal. Wenns dann immer noch nicht klappt hast du n schlechtes gedächtnis. LOL)');
    }
});
*/

/*
const users = {
    'Max': 'PWvonMax',
    'Luna': 'PWvonLuna',
    'Levi': 'Banane14',
    'Tamino': '7871',
    'Ben': 'PWvonBen'
};

function login(username, password) {
    if (users[username] && users[username] === password) {
        document.cookie = `username=${username}; path=/`;
        return true;
    }
    return false;
}

// Login-Formular-Event-Listener
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (login(username, password)) {
        // Speichern des Login-Status im localStorage
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'home.html';
    } else {
        alert('Ungültiger Benutzername oder Passwort (versuchs doch nochmal. Wenns dann immer noch nicht klappt hast du n schlechtes gedächtnis. LOL)');
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Angenommen, der Benutzername wird in einem Cookie gespeichert
    var username = getCookie("username");

    if (username === "Max") {
        document.getElementById("content").innerHTML = `
            heir könnte text stehen muss er aber nicht... (in HTML)
        `;
    } else if (username === "Levi") {
        document.getElementById("content").innerHTML = `
            heir könnte text stehen muss er aber nicht... (in HTML)
        `;
    } else {
        document.getElementById("content").innerHTML = `
            heir könnte text stehen muss er aber nicht... (in HTML)
        `;
    }
});


function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
}
*/


document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const response = await fetch('https://rcs-4xuk.onrender.com/login', { // Render-URL hier verwenden
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });

    const result = await response.json();
    if (result.success) {
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'home.html';
    } else {
        alert('Ungültiger Benutzername oder Passwort (versuchs doch nochmal. Wenns dann immer noch nicht klappt hast du n schlechtes gedächtnis. LOL)');
    }
});

