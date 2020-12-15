const Discord = require('discord.js');
const express = require('express');
const app = express();
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


app.route('/', (req, res) => res.send("<h2>David woke up!</h2>"));

client.login(process.env.API_KEY)
app.listen(process.env.PORT || 8000, () => console.log(`listening on PORT ${process.env.PORT || 8000}`))
