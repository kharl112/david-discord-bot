const { MessageAttachment } = require("discord.js");

module.exports = (img64, user, ext = "png") => {
  const imageBuff = new Buffer.from(img64.split(",")[1], "base64");
  return new MessageAttachment(imageBuff, `${user.username}.${ext}`);
};
