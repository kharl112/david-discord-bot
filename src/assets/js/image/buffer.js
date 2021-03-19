const { MessageAttachment } = require("discord.js");

module.exports = (img64, user) => {
  const imageBuff = new Buffer.from(img64.split(",")[1], "base64");
  return new MessageAttachment(imageBuff, `${user.nickname}.png`);
};
