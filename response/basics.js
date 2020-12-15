const { MessageEmbed, Presence } = require('discord.js');
const embed = new MessageEmbed();
const ping = (message) => {
    message.channel.send("What?");
}
const view_avatar = (message) => {
    let user = message.mentions.users.first() || message.author;
    message.channel.send(user.displayAvatarURL());
}

const view_profile = (message) => {
    let user = message.mentions.users.first() || message.author;
    embed.setTitle(`${user.username}`)
         .addFields(
             {name: "nigger points", value: 0},
             {name: "status", value: user.presence.status}
            )
         .setThumbnail(user.displayAvatarURL())
         .setColor(0xfbd11d)
         .setTimestamp()
    message.channel.send(embed)
}

module.exports = {
    view_avatar,
    view_profile,
    ping
}