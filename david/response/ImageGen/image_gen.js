const singleWord = require("./templates/singleWord");

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

  return { pass, facts, cmm, cardboard };
})();