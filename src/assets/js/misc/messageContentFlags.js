module.exports = (message) => {
  const content = message.content.split(" ");
  return ([command, flag] = [content[0], content[1]]);
};
