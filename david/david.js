
const { view_avatar, ping, view_ranking } = require('./response/basics');
const { view_profile, user_register, user_pp } = require('./response/profile');
const { add_metal, add_n_word, add_pp_size } = require('./response/points');

module.exports = message => {
    let d = message.content.split("").slice(0, 2);
    d = d.join("").toString();
    if (d === 'd?') {

        message.content === 'd?' ? ping(message) : null;
        message.content === 'd? register' ? user_register(message) : null;
        /d\? av/gi.test(message.content) ? view_avatar(message) : null;
        /d\? prof/gi.test(message.content) ? view_profile(message) : null;
        /d\? rank/gi.test(message.content) ? view_ranking(message) : null;
        /d\? buy gel/gi.test(message.content) ? add_pp_size(message) : null;
        /d\? pp/gi.test(message.content) ? user_pp(message) : null;

    }

    let has_m_points = message.content.match(/metal|dave mustaine|megadeth|david ellefson|80s|david/gi);
    let has_n_points = message.content.match(/nigger|nigga|nigg|niggah|negro|negrito|negrata/gi);

    has_m_points ? add_metal(message) : null;
    has_n_points ? add_n_word(message) : null;

};



