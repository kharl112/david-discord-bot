const Jimp = require("jimp");

module.exports = (fontSize, color = "BLACK") => {
    color = color.toUpperCase();
    return Jimp[`FONT_SANS_${fontSize}_${color}`];
};
