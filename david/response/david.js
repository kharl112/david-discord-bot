module.exports = (msg) => {
  const david = msg.content.split("").slice(0, 2).join("");
  if (david.toLowerCase() === "d?") {
    /d\? av/i.test(msg.content)
      ? msg.reply("avatar?")
      : /d\?/i.test(msg.content)
      ? msg.reply("What?")
      : null;
  }
};
