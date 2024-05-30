const express = require('express');
const { engine } = require('express-handlebars');
const myconnection = require('express-myconnection');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const moviesRoutes = require('./routes/movies');

const app = express();
app.set('port', 4000);

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.set('views', __dirname + '/views');
app.engine('.hbs', engine({
  extname: '.hbs',
}));
app.set('view engine', 'hbs');

app.use(myconnection(mysql, { // Se realiza conexión a la base de datos
  host: 'localhost',
  user: 'root',
  password: '',
  port: 3306,
  database: 'crudnodejs'
}, 'single')); //Se utiliza una sola base de datos (Opcional) Si se utiliza mas de una base de datos se elimina single

app.listen(app.get('port'), () => { //Es opcional cuando al ejecutar es para identificar en que puerto se ejecuta la BD
  console.log('Listening on port ', app.get('port')); //Muestra en consola el puerto
});

app.use('/', moviesRoutes);

app.get('/', (req, res) => { //Direccion inicial de mi proyecto como inicia mi proyecto
  res.render('home');
});