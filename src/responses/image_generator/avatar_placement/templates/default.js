const Jimp = require("jimp");
const buffer = require("../../../../assets/js/image/buffer");
const userAvatar = require("../../../../assets/js/message/user/userAvatar");
const imageAttachment = require("../../../../assets/js/message/content/imageAttachment");

module.exports = (message, url, { x, y, size }) => {
  const { user } = userAvatar(message);

  return Jimp.read(imageAttachment(message), (e, av) => {
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
