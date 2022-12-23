const path = require("path");

module.exports = (fileName, dir) =>
  path.join(__dirname + `/../../images/${dir}/${fileName}.jpg`);
