const messageFlags = require("../assets/js/message/content/contentFlags");
const singleWorded = require("./image_generator/singleWorded");
module.exports = (message) => {
  const [command, flag] = messageFlags(message);

  if (command.toLowerCase() === "d?") {
    /d\? attach/i.test(message.content)
      ? singleWorded.attach({ message, flag })
      : /d\? burn/i.test(message.content)
      ? singleWorded.burn({ message, flag })
      : null;
  }
};
