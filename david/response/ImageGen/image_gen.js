const singleWord = require("./templates/single_words/singleWord");
const {
  invertAvatar,
  censoredAvatar,
  whatAvatar,
  steppedAvatar,
  cumAvatar,
} = require("./templates/avatar/placeAvatar");

module.exports = (() => {
  const pass = (msg) =>
    singleWord(
      msg,
      "https://indianmemetemplates.com/wp-content/uploads/Quiz-Kid.jpg",
      "pass",
      { x: 390, y: 480 }
    );

  const facts = (msg) =>
    singleWord(
      msg,
      "https://64.media.tumblr.com/b622785d12fc8097bec915cca0dbef29/tumblr_p86etmYqXf1xorsigo1_1280.jpg",
      "facts",
      { x: 100, y: 650 }
    );

  const cmm = (msg) =>
    singleWord(msg, "https://imgflip.com/s/meme/Change-My-Mind.jpg", "cmm", {
      x: 230,
      y: 225,
    });

  const cardboard = (msg) =>
    singleWord(
      msg,
      "https://imgflip.com/s/meme/Guy-Holding-Cardboard-Sign.jpg",
      "cardboard",
      {
        x: 300,
        y: 100,
      }
    );

  const jerry = (msg) =>
    singleWord(msg, "https://i.redd.it/y8cmqu9ada341.jpg", "jerry", {
      x: 380,
      y: 750,
    });

  const invert = (msg) => invertAvatar(msg);
  const censored = (msg) => censoredAvatar(msg);
  const what = (msg) => whatAvatar(msg);
  const step = (msg) => steppedAvatar(msg);
  const cum = (msg) => cumAvatar(msg);

  return {
    pass,
    facts,
    cmm,
    cardboard,
    jerry,
    invert,
    censored,
    what,
    step,
    cum,
  };
})();
