const User = require('../models/user');
const { MessageEmbed } = require('discord.js');
const embed = new MessageEmbed();
const { view_rank_list } = require('../embed/view_embeds');


const ping = (message) => {
    message.channel.send("What?");
}

const view_avatar = (message) => {
    let user = message.mentions.users.first() || message.author;
    message.channel.send(user.displayAvatarURL());
}

const view_ranking = async(message) => {
    let rank_list = await User.find({}).limit(6).sort({n_points: -1, m_points: -1});
    if(!rank_list) return message.channel.send(`❌ no one is registered here!`);

    view_rank_list.title = message.guild.name;
    view_rank_list.fields[0].value = `<@!${rank_list[0].discord_id}>`
    view_rank_list.fields[1].value = await `${rank_list.map((search, index) => `${index + 1}.<@!${search.discord_id}> \n`)}`;

    message.channel.send({embed: view_rank_list});

}

module.exports = {
    view_avatar,
    ping,
    view_ranking
}