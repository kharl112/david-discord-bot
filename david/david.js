
const { view_avatar, ping } = require('./response/basics');
const { view_profile, user_register } = require('./response/profile');
const { add_metal, add_n_word } = require('./response/points');

module.exports = message => {
    let d = message.content.split("").slice(0, 2);
    d = d.join("").toString();
    let user = message.mentions.users.first() || {id: ""};

    if (d === 'd?') {
        message.content === 'd?' ? ping(message) : null;

        message.content === 'd? register' ? user_register(message) : null;

        message.content === 'd? av' ||
            message.content === `d? av <@!${user.id}>`
            ? view_avatar(message) : null;

        message.content === 'd? prof' ||
            message.content === `d? prof <@!${user.id}>`
            ? view_profile(message) : null;
    }

    let has_m_points = message.content.match(/metal|dave mustaine|metallica|megadeth|david ellefson|80s|david/gi);
    let has_n_points = message.content.match(/nigger|nigga|nigg|niggah|negro|negrito|negrata/gi);

    has_m_points ? add_metal(message) : null;
    has_n_points ? add_n_word(message) : null;

};



