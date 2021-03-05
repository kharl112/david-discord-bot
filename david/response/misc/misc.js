module.exports = ((msg) => {
  const ping = (msg) => msg.reply("What?");

  const view_av = (msg) => {
    const user = msg.mentions.users.first() || msg.author;
    return msg.channel.send(user.displayAvatarURL());
  };

  const gay = (msg) => {
    const members = msg.guild.members.cache.map(node => node.user);
    const gay_index = Math.floor(Math.random() * members.length);

    return msg.channel.send(`<@!${members[gay_index].id}> is the gayest in this server!`)
  };

  const racist = (msg) => {
    const members = msg.guild.members.cache.map(node => node.user);
    const racist_index = Math.floor(Math.random() * members.length);

    return msg.channel.send(`<@!${members[racist_index].id}> is the most racist in this server!`)
  };

  return { ping, view_av, gay, racist };
})();
