const messageFlags = require("../assets/js/message/content/contentFlags");
const singleWorded = require("./image_generator/singleWorded");
const avatarPlacement = require("./image_generator/avatarPlacement");

module.exports = (message) => {
  const [command, flag] = messageFlags(message);

  if (command.toLowerCase() === "d?" && flag) {
    const parent = [singleWorded, avatarPlacement].filter((node) =>
      node.hasOwnProperty(flag)
    );
    if (parent[0]) return parent[0][flag]({message, flag});
  }
};
