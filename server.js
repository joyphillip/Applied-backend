/* == External Modules == */
const express = require('express')

/* == Internal Modules == */
const routes = require('./routes')

/* == Express Instance == */
const app = express()

/* == cors == */
const cors = require('cors');
app.use(cors());
// whitelist & corsOptions
const whitelist = ['http://localhost:3002', `${process.env.FRONTEND_URL}`]
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
/* == session == */
require('dotenv').config()
const session = require('express-session');
const SESSION_SECRET = process.env.SESSION_SECRET


app.use(
	session({
		secret: SESSION_SECRET,
		resave: false,
		saveUninitialized: false,
	})
);

const isAuthenticated = (req, res, next) => {
	if (req.session.currentUser) {
		return next();
	} else {
		res.status(403).json({ msg: 'login required' });
	}
};

/* == Port == */
const PORT = process.env.PORT || 3000;

/* == DB connection == */
require('./config/db.connection');

/* == Middleware == */
app.use(cors('*'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* == Routes == */
app.use('/jobs', routes.jobs)
app.use('/users', routes.users)

app.listen(PORT, () => {
  console.log('🎧', 'Listening on port', PORT, '🎧',)
})

/* == Server Bind == */

