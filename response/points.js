const User = require('../models/user');

const add_metal = async (message) => {
    const user_found = await User.findOne({ discord_id: message.author.id });
    if (!user_found) return;

    try {
        user_found.m_points = user_found.m_points + 1;
        const save_user = await user_found.save();
        console.log(save_user);
    } catch (error) {
        console.log(error);
    }
}

const add_n_word = async(message) => {
    const user_found = await User.findOne({ discord_id: message.author.id });
    if (!user_found) return;

    try {
        user_found.m_points = user_found.n_points + 1;
        const save_user = await user_found.save();
        console.log(save_user);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    add_metal,
    add_n_word
}