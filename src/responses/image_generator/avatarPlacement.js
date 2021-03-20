const getFileLoc = require("../../assets/js/image/getFileLoc");
const placeAvatar = require("./templates/placeAvatar");

module.exports = (() => {
  const brainThrow = ({ message, flag }) =>
    placeAvatar(message, getFileLoc(flag, "avatar_placement"), {
      x: 30,
      y: 65,
      size: 65,
    });

  return { brainThrow };
})();
