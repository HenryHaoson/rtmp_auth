var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

global.prikey = 81;
global.playKey = 0;
global.publishKey = 0;
app.get('/publish_auth_rtmp', function(req, res) {
    console.log('query', req.query);
    const name = req.query && req.query.name;
    const key = req.query && req.query.key;
    if (name === 'jiayue' && key === global.playKey) {
        res.sendStatus(200);
    } else if (name === 'jiayue1' && key === global.playKey) {
        res.sendStatus(200);
    } else {
        res.sendStatus(400);
    }
});
app.get('/play_auth_rtmp', function(req, res) {
    const name = req.query && req.query.name;
    const key = req.query && req.query.key;
    console.log('req', req.body);
    if (name === 'jiayue' && key === global.playKey) {
        res.sendStatus(200);
    } else if (name === 'jiayue1' && key === global.playKey) {
        res.sendStatus(200);
    } else {
        res.sendStatus(400);
    }
});

app.post('/play_auth', function(req, res) {
    const username = req.body && req.body.username;
    const password = req.body && req.body.password;
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const day = Math.floor(diff / oneDay);
    if (username === 'henry' && (password ^ global.prikeyay) === 44332211) {
        global.playKey = 44332211 ^ day;
        res.send(200, {
            key = global.playKey,
        });
    }
});

app.post('/publish_auth', function(req, res) {
    const username = req.body && req.body.username;
    const password = req.body && req.body.password;
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const day = Math.floor(diff / oneDay);
    if (username === 'henry' && (password ^ global.prikeyay) === 11223344) {
        global.publishKey = 11223344 ^ day;
        res.send(200, {
            key = global.publishKey,
        });
    }
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
