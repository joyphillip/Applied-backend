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
    type: Number, 
    default: 0
}, 
date: {
    type: String, 
    required: true
},
offer: {
    type: Boolean, 
    default: false
}, 
Notes: [{ type: String }] 
    
})

/* our schecma -> complied -> model -> is the one that have access to all the methods */
const Jobs = mongoose.model( 'Jobs',  jobsSchema)


// export
module.exports = Jobs