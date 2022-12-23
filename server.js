const Discord = require("discord.js");
const client = new Discord.Client();
const presence = require("./src/assets/js/client/status/presence");
const david = require("./src/responses/david");
require("dotenv").config();

client.on("ready", () => {
	console.log(`Ayyyyy! ${client.user.tag} finallly woke up!`);
	client.user.setPresence(presence);
});

client.on("message", async (message) => david(message));

client.login(process.env.API_KEY);
