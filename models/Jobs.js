const mongoose = require('mongoose');

const jobsSchema = new mongoose.Schema({
company: {
    type: String, 
    required: true
},
job: {
    type: String, 
    required: true
},
salary: {
    type: String, 
    default: 0
}, 
date: {
    type: String, 
    required: true
},
offer: {
    type: String,
}, 
notes: { 
    type: String,
    default: 'Add some notes!'
}
    
})

/* our schecma -> complied -> model -> is the one that have access to all the methods */
const Jobs = mongoose.model( 'Jobs',  jobsSchema)


// export
module.exports = Jobs

