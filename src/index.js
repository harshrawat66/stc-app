// /Users/greyknight/mongodb/bin/mongod --dbpath=/Users/greyknight/mongodb-data/

const path = require('path');
const express = require('express');
const hbs = require('hbs');
require('./db/mongoose');
const reportRouter = require('./router/reports');
const userRouter = require('./router/users');
const loginRouter = require('./router/logins');

const partialsPath = path.join(__dirname, '../views/partials');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(reportRouter);
app.use(userRouter);
app.use(loginRouter);
app.use(express.static(path.join(__dirname, '../public')));
app.set('view engine', 'hbs');
hbs.registerPartials(partialsPath);

app.get('', (req, res) => {
   res.render('index', {
       title: 'Weather App',
       name: 'Harsh Rawat'
   })
})

app.get('/home', (req, res) => {
   res.render('reports', {
       title: 'Weather App',
       name: 'Harsh Rawat'
   })
})
 
app.listen(port, () => {
   console.log('server up on port ' + port);
})