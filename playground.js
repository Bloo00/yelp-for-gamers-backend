const { PlayerCard } = require("./models");

PlayerCard.insert(
    {
        username: "Poig",
        comments: ["this person is cool :D", "jim j poggers herself"],
        rateing: 5
    }
)
    .then((newPlayerCard) => {
        console.log(newPlayerCard);
    })
    .catch((error) => {
        console.log("error ", err)
    })