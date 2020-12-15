const mongoose = require('mongoose');

const User = new mongoose.Schema({
    discord_id: String,
    n_points: Number,
    m_points: Number
});

module.exports = mongoose.model('users', User);