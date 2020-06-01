const Act = require('../models/Act');
var express = require('express');
var router = express.Router();


/* GET all acts. */
router.get('/', async (req, res) => {
 try { 
   const acts= Act.find();
  if(!acts) throw Error('No acts found');
  res.status(200).json(acts);
}
catch (e) {
  res.status(400).json({msg: e.message});
}
});

/* post new act */
router.post("/", async (req, res) => {
  const newAct = new Act({
    title: req.body.title,
    detail: req.body.detail
  });
  try {
    const act = await newAct.save();
    if(!item) throw Error('Something went wrong with saving the act');
    res.status(200).send(act);
  } catch (e) {
    res.status(400).json({msg: e.message});
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const act = await Act.findById(req.params.id);
    if(!item) throw Error('No act found');

    const removed = await act.remove();
    if(!removed) throw Error('Error on deleting act');
    res.status(200).json({success: true});
  } catch (e) {
    res.status(400).json({ msg: e.message, success: false});
  }
});

module.exports = router;
