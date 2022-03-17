const express = require('express');
const cors = require('cors');
const {sequelize} = require('../src/plugins/database');
const app = express();
const config = require('../src/config');
const port = config.port;

// ***** verify database *****
sequelize.sync().then(result => {
  console.log('successful database verification 1029')
}).catch(err => {
  console.log('error in the database: ' + err)
})

// ***** settings *****
app.set('port', port);
app.set('json spaces', 2);
app.use(express.json()); // to recognize json format
app.use(express.urlencoded({extended: false})); // to understand data from a form
app.use(cors());

// ***** routes *****
app.use(require('./routes/users.route'));
app.use(require('./routes/sessions.route'));

// ***** starting the server *****
app.listen(app.get('port'), () => {
    console.log(`Server on port...`)
})

module.exports = app;