const Jimp = require("jimp");
const buffer = require("../../../assets/js/image/buffer");
const getFont = require("../../../assets/js/image/getFont");
const messageFlags = require("../../../assets/js/message/content/contentFlags");

module.exports = (message, url, { x, y }) => {
  const [, , word] = messageFlags(message);
  if (!word) return message.channel.send("`you need to add a word for that`");

  return Jimp.read(url)
    .then((img) => {
      loadImage = img;
      let fontSize = 64;

      if (word.length > 6) fontSize = 32;
      return getFont(fontSize, "BLACK");
    })
    .then((font) => {
      loadImage
        .print(font, x, y, word, 200)
        .quality(60)
        .getBase64(Jimp.AUTO, (e, img64) => {
          if (e) return console.log(e);

          const theImage = buffer(img64, { username: "unknown" });
          return message.channel.send(theImage);
        });
    });
};
