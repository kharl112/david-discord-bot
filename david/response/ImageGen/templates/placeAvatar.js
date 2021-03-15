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

const whatAvatar = (msg) => {
  const user = msg.mentions.users.first() || msg.author;
  const avatar = user.displayAvatarURL().replace(/webp$/i, "png");
  const whatImg = "https://i.ytimg.com/vi/VN2cezzpBPU/hqdefault.jpg";

  return Jimp.read(avatar, (e, av) => {
    if (e) throw e;
    av.resize(100, 100);
    return Jimp.read(whatImg, (e, temp) => {
      if (e) throw e;
      temp.composite(av, 190, 75).getBase64(Jimp.AUTO, (e, img64) => {
        if (e) throw e;
        const imageBuff = new Buffer.from(img64.split(",")[1], "base64");
        const theImage = new MessageAttachment(
          imageBuff,
          `${user.nickname}.png`
        );
        return msg.channel.send(theImage);
      });
    });
  });
};

const steppedAvatar = (msg) => {
  const user = msg.mentions.users.first() || msg.author;
  const avatar = user.displayAvatarURL().replace(/webp$/i, "png");
  const whatImg =
    "https://i.pinimg.com/236x/9d/45/47/9d4547330630963a9562c2ce895544b9.jpg";

  return Jimp.read(avatar, (e, av) => {
    if (e) throw e;
    av.resize(50, 50).quality(100).rotate(-30);
    return Jimp.read(whatImg, (e, temp) => {
      if (e) throw e;
      temp.composite(av, 70, 210).getBase64(Jimp.AUTO, (e, img64) => {
        if (e) throw e;
        const imageBuff = new Buffer.from(img64.split(",")[1], "base64");
        const theImage = new MessageAttachment(
          imageBuff,
          `${user.nickname}.png`
        );
        return msg.channel.send(theImage);
      });
    });
  });
};

module.exports = { invertAvatar, censoredAvatar, whatAvatar, steppedAvatar };
