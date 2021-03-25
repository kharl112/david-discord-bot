const imageEffects = require("./templates/default");

module.exports = (() => {
  const invert = (message, flag) => imageEffects(message, flag);
  return { invert };
})();
