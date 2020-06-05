var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const Act = require("../models/Act");
const { uuid } = require("uuidv4");

/* GET all acts. */
router.get("/", async (req, res) => {
  Act.find()
    .then((response) => {
      res.send(response);
    })
    .catch((err) => console.error(err));;
    });


/* destination for files uploaded */
const DIR = "uploads/";

/* multer middleware to handle uploading files -image  */
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, DIR);
  },
  filename: function (req, file, cb) {
    const fileName = file.originalname.toLowerCase().split(" ").join("-");
    cb(null, uuid() + "-" + fileName);
  },
});

var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only png, jpg and jpeg file formats allowed."));
    }
  },
});

/* post new act */
router.post("/", upload.single("imagepath"), function (req, res, next) {
  let act = new Act({
    title: req.body.title,
    detail: req.body.detail,

    imagepath: req.file.path,
  });
  act
    .save()
    .then(() => {
      res
      .status(200)
      .send({
        message: "You have created a new act.",
        actCreated: {
          title: result.title,
          detail: result.detail,
          imagepath: result.imagepath,
        },
      });
    })
    .catch((userErr) => console.error(`User error: ${userErr}`));
    });


/* delete an act */
router.delete("/:id", async (req, res) => {
  try {
    const act = await Act.findById(req.params.id);
    if (!Act) throw Error("No act found");

    const removed = await act.remove();
    if (!removed) throw Error("Error on deleting act");
    res.status(200).send({ success: "Success!" });
  } catch (e) {
    res.status(400).json({ msg: e.message, success: false });
  }
});

module.exports = router;
