const express = require('express');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// middleware below here 

// app.use((req, res, next) => {
//     res("Content-Type", "image/svg+xml");
//     next();
//    });

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.get('/intent', (req, res) => {
    res.render('intent.ejs');
});

app.get('/nobattery', (req, res) => {
    res.render('form-w-o-battery.ejs');
});

app.get('/battery', (req, res) => {
    res.render('form-with-battery.ejs');
});

app.listen(3030, (err) => {
    if (err) console.log(err);
    console.log("Server Running on port 3030");
});