const singles = require("./templates/default");
const getFileLoc = require("../../../assets/js/image/getFileLoc");

module.exports = (() => {
  const present = (message, flag) =>
    singles(message, getFileLoc(flag, "single_worded"), {
      x: 120,
      y: 85,
      fontSize: 128,
    });

  const attach = (message, flag) =>
    singles(message, getFileLoc(flag, "single_worded"), {
      x: 250,
      y: 40,
      fontSize: 64,
    });

  const jerry = (message, flag) =>
    singles(message, getFileLoc(flag, "single_worded"), {
      x: 220,
      y: 420,
      fontSize: 64,
    });

  const burn = (message, flag) =>
    singles(message, getFileLoc(flag, "single_worded"), {
      x: 20,
      y: 35,
      fontSize: 32,
    });

  const petition = (message, flag) =>
    singles(message, getFileLoc(flag, "single_worded"), {
      x: 70,
      y: 125,
      fontSize: 32,
    });

  const realize = (message, flag) =>
    singles(message, getFileLoc(flag, "single_worded"), {
      x: 180,
      y: 460,
      fontSize: 64,
    });

  const whisper = (message, flag) =>
    singles(message, getFileLoc(flag, "single_worded"), {
      x: 200,
      y: 290,
      fontSize: 64,
    });

  const sickof = (message, flag) =>
    singles(message, getFileLoc(flag, "single_worded"), {
      x: 200,
      y: 150,
      fontSize: 128,
    });

  return { attach, burn, jerry, present, petition, realize, whisper, sickof };
})();
