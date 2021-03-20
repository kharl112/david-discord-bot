const getFileLoc = require("../../assets/js/image/getFileLoc");
const placeAvatar = require("./templates/placeAvatar");

module.exports = (() => {
  const brainThrow = ({ message, flag }) =>
    placeAvatar(message, getFileLoc(flag, "avatar_placement"), {
      x: 30,
      y: 70,
      size: 65,
    });

  const surrounded = ({ message, flag }) =>
    placeAvatar(message, getFileLoc(flag, "avatar_placement"), {
      x: 390,
      y: 290,
      size: 100,
    });

  const bother = ({ message, flag }) =>
    placeAvatar(message, getFileLoc(flag, "avatar_placement"), {
      x: 400,
      y: 92,
      size: 95,
    });

  return { brainThrow, surrounded, bother };
})();
