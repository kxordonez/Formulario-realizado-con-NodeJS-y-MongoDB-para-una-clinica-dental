const express = require('express'); //
const morgan = require('morgan');
const cors = require('cors')
const app = express();

//requerir la base de datos
const {mongoose} = require('./database')

//Settings
//Puerto donde escucha la app
app.set('port', process.env.PORT || 3000)
//Middlewares
//morgan ayuda que eso lo que quiere el usuario
app.use(morgan('dev'));
//convierte el codigo
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));
//Routes
app.use('/api/patients', require('./routes/patients.routes'));

//Starting the server
app.listen(app.get('port'), () => {
  console.log('server on port', app.get('port'));
});
