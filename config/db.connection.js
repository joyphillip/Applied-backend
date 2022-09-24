// require mongoose
const mongoose = require('mongoose');
/* == connection string == */
const connectionStr = process.env.MONGODB_URI || 'mongodb+srv://jphillip018:Philmor4eva09!@joyscluster.fmwflap.mongodb.net/Applied?retryWrites=true&w=majority';

// set up connection with the DB
mongoose.connect( connectionStr);

// set up listeners to monitor your database connection
mongoose.connection.on('connected', ()=> console.log('DB connected... 🙌🙌🙌'));

mongoose.connection.on('error', (err)=> console.log(err.message));

mongoose.connection.on('disconnected', ()=> console.log('mongoose disconnected'));
