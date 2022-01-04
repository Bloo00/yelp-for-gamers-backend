const { PlayerCard } = require("./models");

PlayerCard.insertMany(
    [{
        username: "Poig",
        comments: ["this person is cool :D", "jim j poggers herself"],
        rateing: 5
    },
    {
        username: "Poig",
        comments: ["this person is cool :D", "jim j poggers herself"],
        rateing: 5
    }
]
)
    .then((newPlayerCard) => {
        console.log(newPlayerCard);
    })
    .catch((err) => {
        console.log("error ", err)
    })