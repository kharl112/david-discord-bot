module.exports = (message) => {
  const content = message.content.split(" ");
  if (content.length > 1)
    return ([command, flag, word] = [
      content[0],
      content[1].toLowerCase(),
      content.slice(2).join(" "),
    ]);
  else return ([command] = [content[0]]);
};
