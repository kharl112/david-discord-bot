const path = require("path");

module.exports = (fileName) =>
  path.join(__dirname + `/../../images/single_worded/${fileName}.jpg`);
