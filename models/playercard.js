const mongoose = require("mongoose");

const playerhema = new mongoose.Schema({
    username: String,
    comments: String,
    rateing: Number,
});

const PlayerCard = mongoose.model("PlayerCard", schema);

module.exports = PlayerCard;