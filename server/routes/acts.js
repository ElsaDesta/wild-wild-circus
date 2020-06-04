var express = require("express");
var router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const Act = require("../models/Act");
const { uuid } = require('uuidv4');

const DIR = "./uploads/";


/* GET all acts. */
router.get("/", async (req, res) => {
  Act.find((error, data) => {
    if (error) {
      res.status(400).json({ msg: "error" });
    }
     else {
      res.status(200).json(data);
    }
  });
});

/* multer middleware to handle uploading files -image  */
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, DIR);
  },
  filename: function(req, file, cb) {
    const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, uuid() + '-' + fileName)
  }
});

var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if(file.mimetype == "image/png" || "image/jpg" || "image/jpeg") {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only png, jpg and jpeg file formats please.'));
    }
  }
})
//.single("imagepath");

/* post new act */
router.post("/", upload.single("imagepath"), function (req, res, next)  {
  const url = req.protocol + "://" + req.get('host');
  let act= new Act({
    title: req.body.title,
    detail: req.body.detail,
    imagepath: url + "/uploads/" + req.file.fieldname
  });
  act.save().then(result => {
    res.status(200).json({
      message: "You have created a new act.",
      actCreated: {
       data : result.data
      }
    })
  }).catch(err => {
    console.log(err),
    res.status(500).json({ error: err, success: false});
  })

 
}) ;  
 

router.delete("/:id", async (req, res) => {
  try {
    const act = await Act.findById(req.params.id);
    if (!Act) throw Error("No act found");

    const removed = await act.remove();
    if (!removed) throw Error("Error on deleting act");
    res.status(200).json({ success: true });
  } catch (e) {
    res.status(400).json({ msg: e.message, success: false });
  }
});

module.exports = router;
