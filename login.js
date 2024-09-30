const users = {
    'Max': 'PWvonMax',
    'Luna': 'PWvonLuna',
    'Levi': 'Banane14',
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
