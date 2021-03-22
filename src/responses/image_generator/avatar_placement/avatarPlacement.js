const getFileLoc = require("../../../assets/js/image/getFileLoc");
const placeAvatar = require("./templates/default");
const withText = require("./templates/withText");

module.exports = (() => {
  const trash = ({ message, flag }) =>
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

  const advertise = ({ message, flag }) =>
    placeAvatar(message, getFileLoc(flag, "avatar_placement"), {
      x: 14,
      y: 40,
      size: 320,
    });

  const drip = ({ message, flag }) =>
    placeAvatar(message, getFileLoc(flag, "avatar_placement"), {
      x: 305,
      y: 100,
      size: 256,
    });

  const joke = ({ message, flag }) =>
    placeAvatar(message, getFileLoc(flag, "avatar_placement"), {
      x: 155,
      y: 60,
      size: 75,
    });

  const simp = ({ message, flag }) =>
    withText(
      message,
      getFileLoc(flag, "avatar_placement"),
      {
        x: 50,
        y: 135,
        size: 220,
      },
      {
        fx: 460,
        fy: 420,
        fontSize: 16,
        color: "BLACK",
      }
    );

  return { trash, surrounded, bother, advertise, drip, simp, joke };
})();
