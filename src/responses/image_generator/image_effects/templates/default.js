const Jimp = require("jimp");
const imageAttachment = require("../../../../assets/js/message/content/imageAttachment");
const buffer = require("../../../../assets/js/image/buffer");

module.exports = (message, flag) => {
  const user = getMentionedOrUser(message);
  Jimp.read(imageAttachment(message), (err, image) => {
    if (err) message.channel.send("something went wrong, try again");
    image[flag]().getBase64(Jimp.AUTO, (e, img64) => {
      if (e) throw e;
      return message.channel.send(buffer(img64, user));
    });
  });
};
