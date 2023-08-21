
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

const db = mysql.createConnection({
    host: '	l0ebsc9jituxzmts.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	',
    user: 'fjkdoj9rzb66qp7p',
    password: 'llqnchds5n6lru8u',
    database: 'xkl3dwam8m18zmv4'
});

db.connect((err) => {
    if (err) {
        console.error('Database connection error:', err);
    } else {
        console.log('Connected to the database');
    }
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/store-response', (req, res) => {
    const { totalResponsiveness, totalDemandingness, parentingStyle } = req.body;

    const sql = 'INSERT INTO quiz_responses (responsiveness, demandingness, parenting_style) VALUES (?, ?, ?)';
    db.query(sql, [totalResponsiveness, totalDemandingness, parentingStyle], (err, result) => {
        if (err) {
            console.error('Error storing response:', err);
            res.status(500).json({ message: 'Error storing response.' });
        } else {
            res.json({ message: 'Response stored successfully.' });
        }
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
