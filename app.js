const express = require('express');
const links = require('./config/variables');

const app = express();

const port = 3001;

app.set('view engine', 'ejs');

app.use(express.static('./public'));

app.get('/', (req, res) =>{
    res.render('landing')
});

app.get('/subscribe', (req, res) => {
    res.redirect(links.subscribe);
});

app.get('/contact', (req, res) => {
    res.redirect(links.contact);
});


app.listen(port, () => {
    console.log('listen to port: ' + port);
});
