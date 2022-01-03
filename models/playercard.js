const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    username: String,
    comments: String,
    rateing: Number,
});

const PlayerCard = mongoose.model("PlayerCard", schema);

module.exports = PlayerCard;