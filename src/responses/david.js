const messageFlags = require("../assets/js/message/content/contentFlags");
const singleWorded = require("./image_generator/singleWorded");
const avatarPlacement = require("./image_generator/avatarPlacement");

module.exports = (message) => {
  const [command, flag] = messageFlags(message);

  if (command.toLowerCase() === "d?") {
    /attach/i.test(flag)
      ? singleWorded.attach({ message, flag })
      : /burn/i.test(flag)
      ? singleWorded.burn({ message, flag })
      : /jerry/i.test(flag)
      ? singleWorded.jerry({ message, flag })
      : /present/i.test(flag)
      ? singleWorded.present({ message, flag })
      : /realize/i.test(flag)
      ? singleWorded.realize({ message, flag })
      : /petition/i.test(flag)
      ? singleWorded.petition({ message, flag })
      : /whisper/i.test(flag)
      ? singleWorded.whisper({ message, flag })
      : /drip/i.test(flag)
      ? avatarPlacement.drip({ message, flag })
      : /throw/i.test(flag)
      ? avatarPlacement.brainThrow({ message, flag })
      : /surrounded/i.test(flag)
      ? avatarPlacement.surrounded({ message, flag })
      : /bother/i.test(flag)
      ? avatarPlacement.bother({ message, flag })
      : /cum/i.test(flag)
      ? avatarPlacement.cum({ message, flag })
      : null;
  }
};
