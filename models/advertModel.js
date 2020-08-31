const mongoose = require("mongoose");

const AdvertSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 3
  },
  category: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  about: {
    type: String,
    required: true,
    minlength: 10
  },
  condition: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: false
  },
  brand: {
    type: String,
    required: false
  },
  // height: {
  //   type: String,
  //   required: true
  // },
  // width: {
  //   type: String,
  //   required: true
  // },
  size: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  itemPicture: {
    type: String,
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  userLikes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
});

const advertModel = mongoose.model("Advert", AdvertSchema);

module.exports = advertModel;
