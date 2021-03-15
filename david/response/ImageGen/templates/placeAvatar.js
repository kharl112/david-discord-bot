const Jimp = require("jimp");
const { MessageAttachment } = require("discord.js");

const invertAvatar = (msg) => {
  const user = msg.mentions.users.first() || msg.author;
  const avatar = user.displayAvatarURL().replace(/webp$/i, "png");

  return Jimp.read(avatar, (err, img) => {
    if (err) throw err;

    img.invert().getBase64(Jimp.AUTO, (e, img64) => {
      if (e) throw e;
      const imageBuff = new Buffer.from(img64.split(",")[1], "base64");
      const theImage = new MessageAttachment(imageBuff, `${user.nickname}.png`);
      return msg.channel.send(theImage);
    });
  });
};

const censoredAvatar = (msg, size) => {
  const user = msg.mentions.users.first() || msg.author;
  const avatar = user.displayAvatarURL().replace(/webp$/i, "png");
  size = parseInt(msg.content.match(/[0-9]+$/)) || 4;

  return Jimp.read(avatar, (err, img) => {
    if (err) throw err;

    img.pixelate(size).getBase64(Jimp.AUTO, (e, img64) => {
      if (e) throw e;
      const imageBuff = new Buffer.from(img64.split(",")[1], "base64");
      const theImage = new MessageAttachment(imageBuff, `${user.nickname}.png`);
      return msg.channel.send(theImage);
    });
  });
};

module.exports = { invertAvatar, censoredAvatar };
