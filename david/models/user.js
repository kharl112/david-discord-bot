const mongoose = require('mongoose');

const User = new mongoose.Schema({
    discord_id: String,
    n_points: Number,
    m_points: Number,
    pp_size: Number
});

module.exports = mongoose.model('users', User);