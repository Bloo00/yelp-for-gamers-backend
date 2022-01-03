const { response } = require("express");
const express = require("express");
const res = require("express/lib/response");
const { PlayerCard } = require('./models');
const app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

  app.use(express.json());
  app.get('/playercard', async (request, response)=> {
    try {
        const PlayerCardArr = await PlayerCard.find({});
        response.json({ PlayerCardArr });
    }
    catch(err) {
        response.status(500).send(err);
    }
});

app.listen(3000, () => {
    console.log("your In the server Port 3000");
});