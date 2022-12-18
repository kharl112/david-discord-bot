const messageFlags = require("../assets/js/message/content/contentFlags");
const singleWorded = require("./image_generator/singleWorded");
const avatarPlacement = require("./image_generator/avatarPlacement");

module.exports = (message) => {
  const [command, flag] = messageFlags(message);
  if (command.toLowerCase() === "d?" && flag) {
    //get existing props from parents
    const parent = [singleWorded, avatarPlacement].filter((node) => node.hasOwnProperty(flag));

    //return a message if parents is empty
    if (!parent.length)
      return message.channel.send(`Command does not exist`);

    //return props as functions
    if (parent[0]) return parent[0][flag]({ message, flag });
  }
};
