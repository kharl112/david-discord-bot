const ping = (message) => {
    message.channel.send("What?");
}
const view_avatar = (message) => {
    message.channel.send(message.author.displayAvatarURL());
}

module.exports = {
    view_avatar,
    ping
}