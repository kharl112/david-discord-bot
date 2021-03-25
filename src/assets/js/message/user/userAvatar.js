module.exports = (message) => {
  const user = message.mentions.users.first() || message.author;
  const avatar = user.displayAvatarURL().replace(/webp$/i, "png");
  return { user, avatar };
};
