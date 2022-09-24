/* == External Modules == */
const express = require('express')

/* == Internal Modules == */
const routes = require('./routes')

/* == Express Instance == */
const app = express()

/* == cors == */
const session = require('express-session')
/* == Port == */
const PORT = process.env.PORT || 3000;

/* == DB connection == */

/* == Middleware == */

/* == Routes == */
app.use('/jobs', routes.jobs)
app.use('/users', routes.users)

app.listen(PORT, () => {
  console.log('🎧', 'Listening on port', PORT, '🎧',)
})

/* == Server Bind == */