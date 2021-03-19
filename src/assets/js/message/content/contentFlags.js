module.exports = (message) => {
  const content = message.content.split(" ");
  return ([command, flag, word] = [
    content[0],
    content[1],
    content.slice(2).join(" "),
  ]);
};
