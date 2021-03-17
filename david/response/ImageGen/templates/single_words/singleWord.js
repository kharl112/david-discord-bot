const Jimp = require("jimp");
const imageBuffer = require("../avatar/sub/imageBuffer");

module.exports = (msg, url, cmd, { x, y }) => {
  const detail = msg.content.toLowerCase().split(`d? ${cmd} `).join("");

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
          const theImage = imageBuffer(img64, { nickname: "unknown" });
          return msg.channel.send(theImage);
        });
    });
};
