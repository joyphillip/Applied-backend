/* == External Modules == */
const express = require('express')

/* == Internal Modules == */
const routes = require('./routes')

/* == Express Instance == */
const app = express()

/* == cors == */

/* == Port == */
const PORT = process.env.PORT || 3000;

/* == DB connection == */

/* == Middleware == */

/* == Routes == */
app.use('/jobs', routes.jobs)

app.listen(PORT, () => {
  console.log('🎧', 'Listening on port', PORT, '🎧',)
})

/* == Server Bind == */