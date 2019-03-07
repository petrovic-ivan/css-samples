const express = require('express');
const esj = require('ejs');

const app = express();

app.set('views', __dirname + '/views');
app.engine('html', esj.renderFile);

app.get('/', (req, res) => {
    res.render('index.html');
});

app.get('/flex', (req, res) => {
    res.render('flex/index.html');
});

app.get('/block', (req, res) => {
    res.render('block/index.html');
});

app.get('/inline', (req, res) => {
    res.render('inline/index.html');
});

app.listen(3000, p => console.log('App is running on http://localhost:3000'));