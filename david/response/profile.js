const User = require('../models/user');
const { MessageEmbed } = require('discord.js');
const embed = new MessageEmbed();
const {view_embed_profile} = require('../embed/view_embeds');

const view_profile = async(message) => {
    let user = message.mentions.users.first() || message.author;
    const user_found = await User.findOne({discord_id: user.id});
    if(!user_found) return message.channel.send(`❌ nigger <@!${user.id}> is not registered yet!`);

    view_embed_profile.title = user.username;
    view_embed_profile.fields[0].value = user_found.n_points;
    view_embed_profile.fields[1].value = user_found.m_points;
    view_embed_profile.thumbnail.url = user.displayAvatarURL();


    return message.channel.send({embed: view_embed_profile});
};

const user_register = async(message) => {
    const user_found = await User.findOne({discord_id: message.author.id});
    if(user_found) return message.channel.send(`❌<@!${message.author.id}>, pussy you're already registered`);

    const user = new User({
        discord_id: message.author.id,
        n_points: 0,
        m_points: 0
    });

    try {
        const success = await user.save();
        return message.channel.send(`✅<@!${message.author.id}>, congrats nigger you're now registered!`);
    } catch (error) {
        return message.channel.send(`❌something is not right, cant register <@!${message.author.id}>`)
    }
};

module.exports = {
    view_profile,
    user_register
};