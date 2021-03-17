const Jimp = require("jimp");
const userAv = require("./sub/userAV");
const imageBuffer = require("./sub/imageBuffer");

const invertAvatar = (msg) => {
  const { user, avatar } = userAv(msg);

  return Jimp.read(avatar, (err, img) => {
    if (err) throw err;
    img.invert().getBase64(Jimp.AUTO, (e, img64) => {
      if (e) throw e;
      const theImage = imageBuffer(img64, user);
      return msg.channel.send(theImage);
    });
  });
};

const censoredAvatar = (msg, size) => {
  const { user, avatar } = userAv(msg);
  size = parseInt(msg.content.match(/[0-9]+$/)) || 4;

  return Jimp.read(avatar, (err, img) => {
    if (err) throw err;
    img.pixelate(size).getBase64(Jimp.AUTO, (e, img64) => {
      if (e) throw e;
      const theImage = imageBuffer(img64, user);
      return msg.channel.send(theImage);
    });
  });
};

const whatAvatar = (msg) => {
  const { user, avatar } = userAv(msg);
  const whatImg = "https://i.ytimg.com/vi/VN2cezzpBPU/hqdefault.jpg";

  return Jimp.read(avatar, (e, av) => {
    if (e) throw e;
    av.resize(100, 100);
    return Jimp.read(whatImg, (e, temp) => {
      if (e) throw e;
      temp.composite(av, 190, 75).getBase64(Jimp.AUTO, (e, img64) => {
        if (e) throw e;
        const theImage = imageBuffer(img64, user);
        return msg.channel.send(theImage);
      });
    });
  });
};

const steppedAvatar = (msg) => {
  const { user, avatar } = userAv(msg);
  const steppedImg =
    "https://i.pinimg.com/236x/9d/45/47/9d4547330630963a9562c2ce895544b9.jpg";

  return Jimp.read(avatar, (e, av) => {
    if (e) throw e;
    av.resize(50, 50).quality(100).rotate(-30);
    return Jimp.read(steppedImg, (e, temp) => {
      if (e) throw e;
      temp.composite(av, 70, 210).getBase64(Jimp.AUTO, (e, img64) => {
        if (e) throw e;
        const theImage = imageBuffer(img64, user);
        return msg.channel.send(theImage);
      });
    });
  });
};

const cumAvatar = (msg) => {
  const { user, avatar } = userAv(msg);
  const cum = "https://www.cumonprintedpics.com/download/file.php?id=8304254";

  return Jimp.read(cum, (e, cum) => {
    if (e) throw e;
    cum.resize(150, 100);
    return Jimp.read(avatar, (e, av) => {
      if (e) throw e;
      av.composite(cum, -12, 10).getBase64(Jimp.AUTO, (e, img64) => {
        if (e) throw e;
        const theImage = imageBuffer(img64, user);
        return msg.channel.send(theImage);
      });
    });
  });
};

module.exports = {
  invertAvatar,
  censoredAvatar,
  whatAvatar,
  steppedAvatar,
  cumAvatar,
};
