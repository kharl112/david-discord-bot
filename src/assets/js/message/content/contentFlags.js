module.exports = (message) => {
  const content = message.content.split(" ");
  const text = message.mentions.users.first()
    ? content.slice(3).join(" ")
    : content.slice(2).join(" ");

  if (content.length > 1)
    return ([command, flag, word] = [
      content[0],
      content[1].toLowerCase(),
      text,
    ]);
  else return ([command] = [content[0]]);
};
