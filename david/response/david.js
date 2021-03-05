const Misc = require("./misc/misc");

module.exports = (msg) => {
  const david = msg.content.split("").slice(0, 2).join("");
  if (david.toLowerCase() === "d?") {
    /d\? av/i.test(msg.content)
      ? Misc.view_av(msg)
      : /d\?/i.test(msg.content)
      ? Misc.ping(msg)
      : null;
  }
};
