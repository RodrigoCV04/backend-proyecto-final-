let express = require('express'),
   path = require('path'),
   mongoose = require('mongoose'),
   cors = require('cors'),
   bodyParser = require('body-parser'),
   dbConfig = require('./database/db');
   const createError = require('http-errors');

// Connecting with mongo db
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
   useNewUrlParser: true
}).then(() => {
      console.log('Database sucessfully connected')
   },
   error => {
      console.log('Database could not connected: ' + error)
   }
)

// Setting up port with express js
const userRoute = require('../backend/routes/user.route')
const productRoute = require('../backend/routes/product.route')
const servRoute = require('../backend/routes/serv.route')
const empRoute = require('../backend/routes/empleado.route')
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended: false
}));
app.use(cors()); 
app.use(express.static(path.join(__dirname, 'dist/mean-stack-crud-app')));
app.use('/', express.static(path.join(__dirname, 'dist/mean-stack-crud-app')));
app.use('/api', userRoute, productRoute, servRoute, empRoute);


const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})


app.use((req, res, next) => {
   next(createError(404));
});


app.use(function (err, req, res, next) {
  console.error(err.message); 
  if (!err.statusCode) err.statusCode = 500; 
  res.status(err.statusCode).send(err.message); 
});