const singles = require("./templates/singles");
const getFileLoc = require("../../assets/js/image/getFileLoc");

module.exports = (() => {
  const attach = ({ message, flag }) =>
    singles(message, getFileLoc(flag), { x: 250, y: 40, fontSize: 64 });

  const burn = ({ message, flag }) =>
    singles(message, getFileLoc(flag), { x: 20, y: 35, fontSize: 32 });

  return { attach, burn };
})();
