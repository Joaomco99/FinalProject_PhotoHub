

const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const photoSchema = new Schema(
  {
    description: String,
    imageUrl: String
  },
  {
    timestamps: true
  }
);

module.exports = model("Photo", photoSchema);
