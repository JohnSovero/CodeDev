const express = require('express');
const cors = require('cors');
//const exphbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');


// Initializations
const app = express();
app.use(cors());

// Settings
app.set('port', process.env.PORT || 4000);
/*
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'), 
    extname: '.hbs'
}));
app.set('view engine', '.hbs'); */

// Middlewares
app.use(bodyParser.json());
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));

// Global Variables


// Routes
// app.get('/', (req, res) => { res.render('index'); });

app.use(require('./routes/categories.routes'));
app.use(require('./routes/students.routes'));
app.use(require('./routes/resources.routes'));
app.use(require('./routes/modules.routes'));
app.use(require('./routes/courses.routes'));
app.use(require('./routes/comments.routes'));
app.use(require('./routes/sessions.routes'));
app.use(require('./routes/payment_methods.routes'));
app.use(require('./routes/transactions.routes'));
app.use(require('./routes/inscriptions.routes'));
app.use(require('./routes/mentors.routes'));
app.use(require('./routes/mentorship.routes'));

// Static Files
//app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;