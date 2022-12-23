const messageFlags = require("./contentFlags");
const userAvatar = require("../user/userAvatar");
module.exports = (message) => {
  let [, , word] = messageFlags(message);
  const { avatar } = userAvatar(message);
  const checkExt = (url) => /png$|jpg$|jpeg$/i.test(url);
  return (
    message.attachments
      .map((node) => node.url)
      .filter((url) => checkExt(url))[0] ||
    (checkExt(word) ? word : false) ||
    avatar
  );
};
