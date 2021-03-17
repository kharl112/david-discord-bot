const Discord = require("discord.js");
require("dotenv").config();
const client = new Discord.Client();
const mongoose = require("mongoose");
const david = require("./david/response/david");

client.on("ready", () => {
  console.log(`Ayyyyy! ${client.user.tag} finallly woke up!`);
  client.user.setPresence({
    status: "dnd",
    activity: {
      name: "sea shanties and singing with my crew while we roam in the vast sea of west indies",
      type: 2,
      url: "https://open.spotify.com/track/4n5UwoPQn0tBlqxQjyEMdB?si=7079619f3f794fd7"
    },
  });
});

client.on("message", async (message) => {
  david(message);
});

mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("david is connected to the database")
);

client.login(process.env.API_KEY);
