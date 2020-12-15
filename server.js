const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();
const mongoose = require('mongoose');
const { view_avatar, ping, view_profile, user_register } = require('./response/basics');

client.on('ready', () => {
    console.log(`Ayyyyy! ${client.user.tag} finallly woke up!`);
});

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology : true
}, () => console.log('david is connected to the database'));

client.on('message', async message => {
    let d = message.content.split("").slice(0, 2);
    d = d.join("").toString();
    let user = message.mentions.users.first() || {id: ""};

    if (d === 'd?') {
        message.content === 'd?' ? ping(message) : null;

        message.content === 'd? register' ? user_register(message) : null;

        message.content === 'd? av' ||
            message.content === `d? av <@!${user.id}>`
            ? view_avatar(message) : null;

        message.content === 'd? prof' ||
            message.content === `d? prof <@!${user.id}>`
            ? view_profile(message) : null;
    }
});

client.login(process.env.API_KEY)
