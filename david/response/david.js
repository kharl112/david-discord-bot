const Misc = require("./Misc/misc");
const Most = require("./Most/most");

module.exports = (msg) => {
  const david = msg.content.split("").slice(0, 2).join("");
  if (david.toLowerCase() === "d?") {
    /d\? av/i.test(msg.content)
      ? Misc.view_av(msg)
      : /d\? gay/i.test(msg.content)
      ? Most.gay(msg)
      : /d\? racist/i.test(msg.content)
      ? Most.racist(msg)
      : /d\?/i.test(msg.content)
      ? Misc.ping(msg)
      : null;
  }
};
