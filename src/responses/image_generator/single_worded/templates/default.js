const Jimp = require("jimp");
const buffer = require("../../../../assets/js/image/buffer");
const getFont = require("../../../../assets/js/image/getFont");
const messageFlags = require("../../../../assets/js/message/content/contentFlags");
const invalidSyntax = require("../../../../assets/js/embed/invalidSyntax");

module.exports = (message, url, { x, y, fontSize = 64 }) => {
  const [, , word] = messageFlags(message);
  if (!word) return invalidSyntax(message);

  return Jimp.read(url)
    .then((img) => {
      loadImage = img;
      if (word.length > 6 && fontSize > 8) fontSize = fontSize / 2;
      return getFont(fontSize, "BLACK");
    })
    .then((font) => {
      loadImage
        .print(font, x, y, word, fontSize * 6 - 10)
        .getBase64(Jimp.AUTO, (e, img64) => {
          if (e) return console.log(e);

          const theImage = buffer(img64, { username: "unknown" });
          return message.channel.send(theImage);
        });
    });
};
