const Misc = require("./Misc/misc");
const Most = require("./Most/most");
const ImageGen = require("./ImageGen/image_gen");
module.exports = (msg) => {
  const david = msg.content.split("").slice(0, 2).join("");
  if (david.toLowerCase() === "d?") {
    /d\? av/i.test(msg.content)
      ? Misc.view_av(msg)
      : /d\? pass/i.test(msg.content)
      ? ImageGen.pass(msg)
      : /d\? facts/i.test(msg.content)
      ? ImageGen.facts(msg)
      : /d\? cmm/i.test(msg.content)
      ? ImageGen.cmm(msg)
      : /d\? jerry/i.test(msg.content)
      ? ImageGen.jerry(msg)
      : /d\? cardboard/i.test(msg.content)
      ? ImageGen.cardboard(msg)
      : /d\? invert/i.test(msg.content)
      ? ImageGen.invert(msg)
      : /d\? roast/i.test(msg.content)
      ? Misc.roast(msg)
      : /d\? gay/i.test(msg.content)
      ? Most.gay(msg)
      : /d\? racist/i.test(msg.content)
      ? Most.racist(msg)
      : /d\?/i.test(msg.content)
      ? Misc.ping(msg)
      : null;
  }
};
