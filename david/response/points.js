const User = require('../models/user');

const add_metal = async(message) => {
    const user_found = await User.findOne({ discord_id: message.author.id });
    if (!user_found) return;

    try {
        user_found.m_points = user_found.m_points + 1;
        const save_user = await user_found.save();
        return console.log(save_user);
    } catch (error) {
        return console.log(error);
    }
}

const add_n_word = async(message) => {
    const user_found = await User.findOne({ discord_id: message.author.id });
    if (!user_found) return;

    try {
        user_found.n_points = user_found.n_points + 1;
        const save_user = await user_found.save();
        return console.log(save_user);
    } catch (error) {
        return console.log(error);
    }
}

const add_pp_size = async(message) => {
    const user_found = await User.findOne({ discord_id: message.author.id });
    if (!user_found) return;

    try {
        user_found.pp_size = user_found.pp_size + 1;
        await user_found.save();
        return message.channel.send(`🍆 <@!${message.author.id}>, congrats faggot you've grown your dick by 1 inch`);
    } catch (error) {
        return console.log(error);
    }
}

module.exports = {
    add_metal,
    add_n_word,
    add_pp_size
}