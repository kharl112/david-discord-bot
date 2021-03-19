const messageFlags = require("../assets/js/message/content/contentFlags");
const singleWorded = require("./image_generator/singleWorded");
module.exports = (message) => {
  const [command, flag] = messageFlags(message);

  if (command.toLowerCase() === "d?") {
    /d\? attach/i.test(message.content)
      ? singleWorded.attach({ message, flag })
      : /d\? burn/i.test(message.content)
      ? singleWorded.burn({ message, flag })
      : /d\? jerry/i.test(message.content)
      ? singleWorded.jerry({ message, flag })
      : /d\? present/i.test(message.content)
      ? singleWorded.present({ message, flag })
      : /d\? petition/i.test(message.content)
      ? singleWorded.petition({ message, flag })
      : null;
  }
};
