
const view_rank_list = {
    color: 0x1c2869,
    title: 'Some title',
    description: 'type "d? register" on the chat if you want to join these faggots',
    fields: [
        {
            name: "Faggot's overall ranking",
            value: 'Some value here',
            inline: true,
        }
    ],
    timestamp: new Date()
};

const view_embed_profile = {
    color: 0xfbd11d,
    title: 'Some title',
    thumbnail: {
        url: ''
    },
    fields: [
        {
            name: '👨🏿 ``Nigger Count``',
            value: 'Some value here',
        },
        {
            name: '🎸 ``Metal Points``',
            value: 'Some value here',
            inline: true,
        },
        {
            name: '🍆 ``Dick Size``',
            value: 1
        }
    ],
    timestamp: new Date()
};

const view_pp_size = {
    color: 0x970108,
    author: {
        name: '',
        icon_url: ''
    },
    description: '',
    footer: {
        text: '',
    }
}

module.exports = {
    view_rank_list,
    view_embed_profile,
    view_pp_size
}
