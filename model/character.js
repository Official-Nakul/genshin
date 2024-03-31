const mongoose = require("mongoose");

const characterSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rarity: {
    type: String,
    enum: ["4 star", "5 star"],
    required: true,
  },
  element: {
    type: String,
    enum: ["Anemo", "Pyro", "Electro", "Cryo", "Dendro", "Hydro", "Geo"],
    required: true,
  },
  constelation: String,
  affiliation: String,
  weaponType: String,
});

const character = mongoose.model("character", characterSchema);

module.exports = character;
