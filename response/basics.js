const { MessageEmbed } = require('discord.js');
const ping = (message) => {
    message.channel.send("What?");
}

const view_avatar = (message) => {
    let user = message.mentions.users.first() || message.author;
    message.channel.send(user.displayAvatarURL());
}



module.exports = {
    view_avatar,
    view_profile,
    ping,
    user_register
}