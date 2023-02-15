const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT ||2000;

const staticPath = path.join(__dirname , '../public');
const Path = path.join(__dirname , '../templates/views')
const partialPath = path.join(__dirname , '../templates/partials')


app.set('view engine' , 'hbs');
app.set('views' , Path);
hbs.registerPartials(partialPath);
app.use(express.static(staticPath));

app.get('' , (req , res) => { 
    res.render('index');
});

app.get('/about' , (req , res) => {
    res.render('about');
});

app.get('/weather' , (req , res) => {
    res.render('weather');
});

app.get('*' , (req , res) => {
    res.render('404error' , {
        errMssg : "404 Oops Page not Found"
    });
});

app.listen(port , ()=>{
    console.log(`Listening On ${port} ......."`)
});