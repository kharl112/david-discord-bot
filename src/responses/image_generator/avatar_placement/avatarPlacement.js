const getFileLoc = require("../../../assets/js/image/getFileLoc");
const placeAvatar = require("./templates/default");
const withText = require("./templates/withText");
const userAvatar = require("../../../assets/js/message/user/userAvatar");
const invalidSyntax = require("../../../assets/js/embed/invalidSyntax");
const messageFlags = require("../../../assets/js/message/content/contentFlags");

module.exports = (() => {
  const trash = (message, flag) =>
    placeAvatar(message, getFileLoc(flag, "avatar_placement"), {
      x: 30,
      y: 70,
      size: 65,
    });

  const surrounded = (message, flag) =>
    placeAvatar(message, getFileLoc(flag, "avatar_placement"), {
      x: 390,
      y: 290,
      size: 100,
    });

  const bother = (message, flag) =>
    placeAvatar(message, getFileLoc(flag, "avatar_placement"), {
      x: 400,
      y: 92,
      size: 95,
    });

  const advertise = (message, flag) =>
    placeAvatar(message, getFileLoc(flag, "avatar_placement"), {
      x: 14,
      y: 40,
      size: 320,
    });

  const drip = (message, flag) =>
    placeAvatar(message, getFileLoc(flag, "avatar_placement"), {
      x: 305,
      y: 100,
      size: 256,
    });

  const joke = (message, flag) =>
    placeAvatar(message, getFileLoc(flag, "avatar_placement"), {
      x: 155,
      y: 60,
      size: 75,
    });

  const simp = (message, flag) => {
    const { user } = userAvatar(message);
    const avatarPosition = { x: 50, y: 135, size: 220 };
    const textPosition = {
      fx: 460,
      fy: 420,
      fontSize: 16,
      color: "BLACK",
      text: `${user.username}#${user.discriminator}`,
    };

    return withText(
      message,
      getFileLoc(flag, "avatar_placement"),
      avatarPosition,
      textPosition
    );
  };

  const eww = (message, flag) => {
    const [, , word] = messageFlags(message);
    const avatarPosition = { x: 190, y: 600, size: 160 };
    const textPosition = {
      fx: 100,
      fy: 180,
      fontSize: 64,
      color: "BLACK",
      text: word,
    };

    if (!word) return invalidSyntax(message);

    return withText(
      message,
      getFileLoc(flag, "avatar_placement"),
      avatarPosition,
      textPosition
    );
  };

  const gas = (message, flag) => {
    const [, , word] = messageFlags(message);
    const avatarPosition = { x: 20, y: 85, size: 75 };
    const textPosition = {
      fx: 215,
      fy: 300,
      fontSize: 64,
      color: "WHITE",
      text: word,
    };

    if (!word) return invalidSyntax(message);

    return withText(
      message,
      getFileLoc(flag, "avatar_placement"),
      avatarPosition,
      textPosition
    );
  };

  return { trash, surrounded, bother, advertise, drip, simp, joke, eww, gas };
})();
