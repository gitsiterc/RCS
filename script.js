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




        document.addEventListener("DOMContentLoaded", function() {
            // Angenommen, der Benutzername wird in einem Cookie gespeichert
            var username = getCookie("username");

            if (username === "Max") {
                document.getElementById("content").innerHTML = `
                    <h1>Willkommen, Max!</h1>
                    <p>Hier sind deine speziellen Inhalte.</p>
                    <ul>
                        <li>Inhalt 1</li>
                        <li>Inhalt 2</li>
                        <li>Inhalt 3</li>
                    </ul>
                    <div class="line"></div>
                `;
            } else if (username === "Levi") {
                document.getElementById("content").innerHTML = `
                    <h1>Willkommen, Levi!</h1>
                    <p>Hier sind deine Inhalte.</p>
                    <div>
                        <img src="bild.jpg" alt="Ein Bild für Levi">
                        <p>Ein spezieller Text für Levi.</p>
                    </div>
                `;
            } else {
                document.getElementById("content").innerHTML = `
                    <h1>Willkommen, Gast!</h1>
                    <p>Bitte logge dich ein, um mehr zu sehen.</p>
                `;
            }
        });

        function getCookie(name) {
            var value = "; " + document.cookie;
            var parts = value.split("; " + name + "=");
            if (parts.length === 2) return parts.pop().split(";").shift();
        }
