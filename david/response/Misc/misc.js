const { MessageEmbed, MessageAttachment } = require("discord.js");
module.exports = ((msg) => {
  const ping = (msg) => msg.reply("What?");

  const view_av = (msg) => {
    const user = msg.mentions.users.first() || msg.author;
    return msg.channel.send(user.displayAvatarURL());
  };

  const roast = (msg) => {
    const user = msg.mentions.users.first();
    if (!user)
      return msg.channel.send(
        `<@!${msg.author.id}> please metion someone or don't copy the recent roast command.`
      );
    let embed = new MessageEmbed()
      .setTitle(`${msg.author.username} roasts you`)
      .setColor(0xff0000)
      .setDescription(
        `<@!${user.id}>, Nigga don’t hate me cause I’m beautiful` +
          " nigga maybe if you got rid of that Yee Yee Ass" +
          " hair cut you got you would get bitches on your dick," +
          " oh, better yet maybe Tanisha will call your dog ass if" +
          " she ever stops fucking with that brain Surgeon or Lawyer" +
          " she fucking with,♪♪ Niiiggggaaaaaa ♪♪"
      )
      .setImage("https://media.tenor.com/images/edb1320c00d2d89c71a7ed7d70131fe4/tenor.gif");

    return msg.channel.send(embed);
  };

  return { ping, view_av, roast };
})();
