const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();
const mongoose = require('mongoose');
const david = require('./david/david');

client.on('ready', () => {
    console.log(`Ayyyyy! ${client.user.tag} finallly woke up!`);
});

client.on('message', async message => {
   david(message);
});

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology : true
}, () => console.log('david is connected to the database'));


client.login(process.env.API_KEY)
