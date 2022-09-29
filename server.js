/* == External Modules == */
const express = require('express')

/* == Internal Modules == */
const routes = require('./routes')

/* == Express Instance == */
const app = express()

/* == cors == */
const cors = require('cors');
app.use(cors());

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
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* == Routes == */
app.use('/jobs', routes.jobs)
app.use('/users', routes.users)

app.listen(PORT, () => {
  console.log('🎧', 'Listening on port', PORT, '🎧',)
})

/* == Server Bind == */

//default
app.get("/", (req, res) => {
	res.send('/users.js')
})