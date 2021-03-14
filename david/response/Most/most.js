module.exports = ((msg) => {
  const gay = async (msg) => {
    let members = await msg.guild.members.fetch();
    members = members.map((node) => node.user);
    const gay_index = Math.floor(Math.random() * members.length);

    return msg.channel.send(
      `<@!${members[gay_index].id}> is the gayest in this server!`
    );
  };

  const racist = async (msg) => {
    let members = await msg.guild.members.fetch();
    members = members.map((node) => node.user);
    const racist_index = Math.floor(Math.random() * members.length);

    return msg.channel.send(
      `<@!${members[racist_index].id}> is the most racist in this server!`
    );
  };

  return { gay, racist };
})();
