const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    username: String,
    comments: String,
    rateing: Integer
});

const PlayerCard = mongoose.model("PlayerCard", schema);

module.exports = PlayerCard;