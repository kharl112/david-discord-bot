const imageEffects = require("./templates/default");

module.exports = (() => {
  const invert = (message, flag) => imageEffects(message, flag);
  const greyscale = (message, flag) => imageEffects(message, flag);
  const sepia = (message, flag) => imageEffects(message, flag);
  return { invert, greyscale, sepia };
})();
