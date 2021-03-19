const Jimp = require("jimp");

module.exports = (fontSize, color = "BLACK") => {
  color = color.toUpperCase();
  return Jimp.loadFont(Jimp[`FONT_SANS_${fontSize}_${color}`]);
};
