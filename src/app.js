const express = require('express'),
        bodyParser = require('body-parser'),
        app = express();

// For parsing request
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({ status: 'OK', message: 'Request reach successfully.' });
});

app.post('/api/users', (req, res) => {
    console.log(req.body);
    res.sendStatus(201);
});

app.listen(3000, () => {
    console.log('server running at http://localhost:3000');
});