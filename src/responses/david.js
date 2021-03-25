const messageFlags = require("../assets/js/message/content/contentFlags");
const singleWorded = require("./image_generator/single_worded/singleWorded");
const avatarPlacement = require("./image_generator/avatar_placement/avatarPlacement");
const imageEffects = require("./image_generator/image_effects/imageEffects");

module.exports = (message) => {
  const [command, flag] = messageFlags(message);
  if (command.toLowerCase() === "d?" && flag) {
    const parent = [singleWorded, avatarPlacement, imageEffects].filter((node) =>
      node.hasOwnProperty(flag)
    );
    if (parent[0]) return parent[0][flag](message, flag);
  }
};
