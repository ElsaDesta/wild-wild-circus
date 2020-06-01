var express = require("express");
var router = express.Router();
const mongoose = require('mongoose');

let actSchema = require("../models/Act");

/* GET all acts. */
router.get("/", async (req, res) => {
  actSchema.find((error, data) => {
    if (error) {
      res.status(400).json({ msg: "error" });
    }
     else {
      res.status(200).json(data);
    }
  });
});

/* post new act */
router.post("/", (req, res, next) => {
  actSchema.create(req.body, (error, data) => {
    if(error) {res.status(400).json({msg: 'Error on creating act'})}
  else{
    console.log(data)
    res.status(200).json(data)
  }})
  
      }
);

router.delete("/:id", async (req, res) => {
  try {
    const act = await Act.findById(req.params.id);
    if (!item) throw Error("No act found");

    const removed = await act.remove();
    if (!removed) throw Error("Error on deleting act");
    res.status(200).json({ success: true });
  } catch (e) {
    res.status(400).json({ msg: e.message, success: false });
  }
});

module.exports = router;
