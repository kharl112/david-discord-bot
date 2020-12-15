const User = require('../models/user');

const view_profile = async(message) => {
    let user = message.mentions.users.first() || message.author;
    const user_found = await User.findOne({discord_id: user.id});
    if(!user_found) return message.channel.send(`❌ nigger <@!${user.id}> is not registered yet!`);
    embed.setTitle(`${user.username}`)
         .addFields(
             {name: "nigger points", value: user_found.n_points},
             {name: "heavy metal points", value: user_found.m_points},
             {name: "status", value: user.presence.status}
            )
         .setThumbnail(user.displayAvatarURL())
         .setColor(0xfbd11d)
         .setTimestamp()
    message.channel.send(embed)
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
        return message.channel.send(`✔️<@!${message.author.id}>, congrats nigger you're now registered!`);
    } catch (error) {
        return message.channel.send(`❌something is not right, cant register <@!${message.author.id}>`)
    }
};

module.exports = {
    view_profile,
    user_register
};