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
const update = (req, res) => {
  db.Jobs.findByIdAndUpdate(
    req.params.id, 
    {
      $set: req.body
    }, 
    { new: true }, 
    (error, updatedJob) => {
    if(error) return res.status(400).json({ error: error.message });

    return res.status(200).json(updatedJob)
  });
};

/* delete */
const destroy = (req, res) => {
  db.Jobs.findByIdAndDelete(req.params.id, (error, deletedJob) => {
    if(error) return res.status(400).json({ error: error.message });

    return res.status(200).json({
      message: `Job: ${deletedJob.job} deleted successfully!`
    });
  });
};

/* export */
module.exports = {
    index,
    create,
    destroy,
    update
  }