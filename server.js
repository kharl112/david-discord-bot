const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();
const { view_avatar, ping } = require('./response/basics');

client.on('ready', () => {
    console.log(`Ayyyyy! ${client.user.tag} finallly woke up!`);
});

client.on('message', message => {
    let david = message.content.split("").slice(0, 6);
    david = david.join("").toString();

    if(david === 'david?'){
        message.content === 'david?' ? ping(message) : null; 
        message.content === 'david? avatar' ? view_avatar(message) : null;
    }
});

client.login(process.env.API_KEY)
