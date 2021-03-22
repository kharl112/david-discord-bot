const Jimp = require("jimp");
const buffer = require("../../../../assets/js/image/buffer");
const userAvatar = require("../../../../assets/js/message/user/userAvatar");

module.exports = (message, url, { x, y, size }) => {
  const { user, avatar } = userAvatar(message);

  return Jimp.read(avatar, (e, av) => {
    if (e) throw e;
    return Jimp.read(url, (e, meme) => {
      if (e) throw e;
      return meme
        .composite(av.resize(size, size), x, y)
        .getBase64(Jimp.AUTO, (e, img64) => {
          if (e) throw e;
          return message.channel.send(buffer(img64, user));
        });
    });
  });
};
