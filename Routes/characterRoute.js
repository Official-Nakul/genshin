const express = require("express");
const router = express.Router();
const Character = require("./../model/character");

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const character = new Character(data);
    const response = await character.save();
    console.log("data saved");
    res.status(200).send(response);
  } catch (e) {
    console.log("Error not working" + e);
    res.status(500).send(e);
  }
});
router.get("/:element", async (req, res) => {
  try {
    const element = req.params.element;
    const response = await Character.find({ element: element });
    console.log("req fetched");
    res.status(200).send(response);
  } catch (e) {
    console.log("Error not working" + e);
    res.status(500).send(e);
  }
});
module.exports = router;
