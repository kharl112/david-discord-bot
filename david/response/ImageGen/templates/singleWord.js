const Jimp = require("jimp");
const { MessageAttachment } = require("discord.js");

const singleWord = (msg, url, cmd, { x, y }) => {
  const detail = msg.content.split(`d? ${cmd} `).join("");
  return Jimp.read(url)
    .then((img) => {
      loadImage = img;
      if (detail.length > 15) {
        x = x - 30;
        return Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);
      }
      return Jimp.loadFont(Jimp.FONT_SANS_64_BLACK);
    })
    .then((font) => {
      loadImage
        .print(font, x, y, detail)
        .quality(60)
        .getBase64(Jimp.AUTO, (e, img64) => {
          if (e) throw e;
          const imageBuff = new Buffer.from(img64.split(",")[1], "base64");
          const theImage = new MessageAttachment(imageBuff, `${cmd}.png`);
          return msg.channel.send(theImage);
        });
    });
};

module.exports = singleWord;
