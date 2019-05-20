var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/auth', function(req, res) {
    console.log('query', req.query);
    const name = req.body && req.query.name;
    const pswd = req.body && req.query.key;
    if (name === 'jiayue' && pswd === 'henry123') {
        res.sendStatus(200);
    } else if (name === 'jiayue1' && pswd === 'henry123') {
        res.sendStatus(200);
    } else {
        res.sendStatus(400);
    }
});
app.post('/auth', function(req, res) {
    const name = req.body && req.body.name;
    const pswd = req.body && req.body.key;
    console.log('req', req.body);
    if (name === 'jiayue' && pswd === 'henry123') {
        res.sendStatus(200);
    } else if (name === 'jiayue1' && pswd === 'henry123') {
        res.sendStatus(200);
    } else {
        res.sendStatus(400);
    }
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
