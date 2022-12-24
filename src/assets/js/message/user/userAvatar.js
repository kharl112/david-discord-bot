const getMentionedOrUser = require("./getMentionedOrUser");

module.exports = (message) => {
  const user = getMentionedOrUser(message);
  const avatar = user.displayAvatarURL().replace(/webp$/i, "png");
  return { user, avatar };
};
