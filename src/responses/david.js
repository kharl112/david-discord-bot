const messageFlags = require("../assets/js/misc/messageContentFlags");

module.exports = (message) => {
  const [command, flag] = messageFlags(message);
  if (command.toLowerCase() === "d?") {
    
  }
};
