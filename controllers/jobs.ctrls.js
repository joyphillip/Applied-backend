const db = require ('../models')

/* index */
const index = (req, res) => {
  db.Jobs.find({}, (error, jobs) => {
    if(error) return res.status(400).json({ error: error.message });

    return res.status(200).json({
      jobs,
      requestedAt: new Date().toLocaleString()
    });
  });
};

/* create */
const create = (req, res) => {
  db.Jobs.create(req.body, (error, createdJobs) => {
    if(error) return res.status(400).json({ error: error.message });

    return res.status(200).json(createdJobs); 
  });
};

/* update */

/* delete */

/* export */
module.exports = {
    index,
    create,
  }