const messageFlags = require("../assets/js/message/content/contentFlags");
const singleWorded = require("./image_generator/singleWorded");
const avatarPlacement = require("./image_generator/avatarPlacement");

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
      : /d\? realize/i.test(message.content)
      ? singleWorded.realize({ message, flag })
      : /d\? petition/i.test(message.content)
      ? singleWorded.petition({ message, flag })
      : /d\? throw/i.test(message.content)
      ? avatarPlacement.brainThrow({ message, flag })
      : /d\? surrounded/i.test(message.content)
      ? avatarPlacement.surrounded({ message, flag })
      : /d\? bother/i.test(message.content)
      ? avatarPlacement.bother({ message, flag })
      : null;
  }
};
