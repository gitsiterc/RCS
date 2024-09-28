function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    // Wenn der Nutzer nicht angemeldet ist, weiterleiten zu index.html
    if (!isLoggedIn) {
        window.location.href = 'index.html';
    }
}

// Diese Funktion wird beim Laden der Seite aufgerufen
window.onload = checkLoginStatus;

document.getElementById('logoutButton').addEventListener('click', function() {
    // Entfernen des Login-Status aus dem localStorage
    localStorage.removeItem('isLoggedIn');
    // Weiterleiten zur Login-Seite
    window.location.href = 'index.html';
});


// Diese Funktion wird beim Laden der Seite aufgerufen
window.onload = checkLoginStatus;
document.getElementById('popupButton').addEventListener('click', function() {
    var popup = document.getElementById('popup');
    if (popup.style.display === 'block') {
        popup.style.display = 'none';
    } else {
        popup.style.display = 'block';
    }
});


function toggleStylesheet() {
    const stylesheet = document.getElementById('stylesheet');
    if (stylesheet.href.endsWith('style.css')) {
        stylesheet.href = 'light.css';
    } else {
        stylesheet.href = 'style.css';
    }
}

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}