const singles = require("./templates/singles");
const getFileLoc = require("../../assets/js/image/getFileLoc");

module.exports = (() => {
  const attach = ({ message, flag }) =>
    singles(message, getFileLoc(flag), { x: 250, y: 40 });

  return { attach };
})();
