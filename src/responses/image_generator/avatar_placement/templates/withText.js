const Jimp = require("jimp");
const buffer = require("../../../../assets/js/image/buffer");
const userAvatar = require("../../../../assets/js/message/user/userAvatar");
const getFont = require("../../../../assets/js/image/getFont");

module.exports = (
  message,
  url,
  { x, y, size },
  { fx, fy, fontSize, color, text }
) => {
  const { user, avatar } = userAvatar(message);
  return Jimp.read(avatar, (e, av) => {
    if (e) throw e;
    return Jimp.read(url)
      .then((img) => {
        loadImage = img;
        fontSize =  (text.length > 6 && fontSize > 8) ? fontSize / 2 : fontSize;
        return getFont(fontSize, color);
      })
      .then((font) => {
        loadImage
          .composite(av.resize(size, size), x, y)
          .print(font, fx, fy, text)
          .getBase64(Jimp.AUTO, (e, img64) => {
            if (e) throw e;
            return message.channel.send(buffer(img64, user));
          });
      });
  });
};
