module.exports = ((msg) => {
  const ping = (msg) => msg.reply("What?");

  const view_av = (msg) => {
    const user = msg.mentions.users.first() || msg.author;
    return msg.channel.send(user.displayAvatarURL());
  };

  return { ping, view_av };
})();
