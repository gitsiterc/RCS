const express = require('express');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const app = express();

const users = {
    'Max': '$2b$10$wC7wi5h3RczpF06QzFuO9OcbnaZ0Ekd/GYsW0WnGdmwV/5yzsAD/S', // Hash von 
    'Luna': '$2b$10$wC7wi5h3RczpF06QzFuO9OcbnaZ0Ekd/GYsW0WnGdmwV/5yzsAD/S', // Hash von 
    'Levi': '$2b$10$EDmPVNkRaAKmIhH2aJXvc.ez1xuH1rv8E/LuxDYj7JfyV/AxTE1CW', // Hash von 
    'Tamino': '$2b$10$3sEEMpv6lT2UlIie/gjcieZzNQpj5g5qqA5uCJY87ABbP9ZzGhKB.', // Hash von
    'Ben': '$2b$10$wC7wi5h3RczpF06QzFuO9OcbnaZ0Ekd/GYsW0WnGdmwV/5yzsAD/S' // Hash von 
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    if (users[username] && await bcrypt.compare(password, users[username])) {
        res.cookie('username', username, { path: '/' });
        res.send({ success: true });
    } else {
        res.send({ success: false });
    }
});

app.listen(3000, () => {
    console.log('Server läuft auf Port 3000');
});
