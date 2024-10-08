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
                    <section class="header">
                        <form method="get" action="https://www.google.com/search">
                            <input class="google" type="text" name="q" placeholder="Google Suche" size="31" value="">
                        </form>
                        <br>
                        <form method="get" action="https://en.wikipedia.org/w/index.php";>
                        <input class="google" type="text" name="search" placeholder="Wikipedia Suche" size="31">
                        </form>
                    </section>
                    <div class="line"></div>
                    <section class="nml">
                        <div class="div1">
                            <p>YouTube</p>
                            <p class="text">Videos, natürluch zum lernen.<br>Ja, ne ist klar. Aber hier findest <br> du sie.</p>
                            <button type="button" onclick="window.open('https://www.youtube.com/','_blank')">Open</button>
                        </div>
                        <div class="imagebox"><br>Hier wird noch ein Bild eingefügt...</div>
                    </section>
                    <div class="line"></div>
                `;
            } else if (username === "Levi") {
                document.getElementById("content").innerHTML = `
                    <h1>Willkommen, Levi.</h1>
                    <p class="text">Bitte schreibe mir mit dem unten vorhandenem Feedback formular und deinem <br>username, welche Websites du gerne verlinkt hättest.</p>
                    <div class="line">
                `;
            } else {
                document.getElementById("content").innerHTML = `
                    <h1>Willkommen, User.</h1>
                    <p class="text">Bitte schreibe mir mit dem unten vorhandenem Feedback formular und deinem <br>username, welche Websites du gerne verlinkt hättest.</p>
                    <div class="line">
                `;
            }
        });

        function getCookie(name) {
            var value = "; " + document.cookie;
            var parts = value.split("; " + name + "=");
            if (parts.length === 2) return parts.pop().split(";").shift();
        }
