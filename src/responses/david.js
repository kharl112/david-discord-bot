const messageFlags = require("../assets/js/message/content/contentFlags");
const singleWorded = require("./image_generator/single_worded/singleWorded");
const avatarPlacement = require("./image_generator/avatar_placement/avatarPlacement");
const imageEffects = require("./image_generator/image_effects/imageEffects");
const imageSearch = require("./image_search/imageSearch");

module.exports = (message) => {
  const [command, flag] = messageFlags(message);
  if (command.toLowerCase() === "d?" && flag) {

    //get existing props from parents
    const parent = [
      singleWorded,
      avatarPlacement,
      imageEffects,
      imageSearch,
    ].filter((node) => node.hasOwnProperty(flag));

    //return a message if parents is empty
    if (!parent.length)
      return message.channel.send(`Command does not exist`);

    //return props as functions
    return parent[0][flag](message, flag);
  }
};
