const messageFlags = require("../message/content/contentFlags");

module.exports = (message) => {
  const [, flag] = messageFlags(message);
  const embed = {
    color: 0xa10505,
    fields: [
      {
        name: `You need to add a __text__ for that like:`,
        value: `\`d? ${flag} "your text here"\``,
      },
      {
        name: `or mention someone:`,
        value: `\`d? ${flag} [mention] "your text here"\``,
      },
    ],
    footer: {
      text: "NOTE: mentioning someone will only be available in some commands",
    },
  };
  return message.channel.send({ embed: embed });
};
