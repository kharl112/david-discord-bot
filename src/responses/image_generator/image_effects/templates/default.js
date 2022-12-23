const Jimp = require("jimp");
const imageAttachment = require("../../../../assets/js/message/content/imageAttachment");
const buffer = require("../../../../assets/js/image/buffer");
const userAvatar = require("../../../../assets/js/message/user/userAvatar");

module.exports = (message, flag) => {
  const { user } = userAvatar(message);
  Jimp.read(imageAttachment(message), (err, image) => {
    if (err) message.channel.send("something went wrong, try again");
    image[flag]().getBase64(Jimp.AUTO, (e, img64) => {
      if (e) throw e;
      return message.channel.send(buffer(img64, user));
    });
  });
};
