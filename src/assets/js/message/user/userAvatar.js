module.exports = (msg) => {
  const user = msg.mentions.users.first() || msg.author;
  const avatar = user.displayAvatarURL().replace(/webp$/i, "png");
  return { user, avatar };
};
