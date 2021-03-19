const messageFlags = require("../assets/js/message/content/contentFlags");

module.exports = (message) => {
  const [command, flag] = messageFlags(message);
  if (command.toLowerCase() === "d?") {
    
  }
};
