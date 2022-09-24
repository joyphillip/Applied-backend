// require mongoose
//JONATHAN SANCHEZ
/* == connection string == */
// const connectionStr = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/holidaysDB';

// set up connection with the DB
mongoose.connect( connectionStr);

// set up listeners to monitor your database connection
mongoose.connection.on('connected', ()=> console.log('DB connected... 🙌🙌🙌'));

mongoose.connection.on('error', (err)=> console.log(err.message));

mongoose.connection.on('disconnected', ()=> console.log('mongoose disconnected'));
