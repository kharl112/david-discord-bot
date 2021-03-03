const User = require("../models/user");
const { view_embed_profile, view_pp_size } = require("../embed/view_embeds");

const view_profile = async (message) => {
  let user = message.mentions.users.first() || message.author;
  const user_found = await User.findOne({ discord_id: user.id });
  if (!user_found)
    return message.channel.send(
      `❌ nigger <@!${user.id}> is not registered yet!`
    );

  view_embed_profile.title = user.username;
  view_embed_profile.fields[0].value = `${user_found.n_points}`;
  view_embed_profile.fields[1].value = `${user_found.m_points}`;
  view_embed_profile.fields[2].value = `${user_found.pp_size} inches`;
  view_embed_profile.thumbnail.url = user.displayAvatarURL();

  return message.channel.send({ embed: view_embed_profile });
};

const user_register = async (message) => {
  const user_found = await User.findOne({ discord_id: message.author.id });

  const user = new User({
    discord_id: message.author.id,
    n_points: 0,
    m_points: 0,
    pp_size: 0,
  });

  try {
    const success = await user.save();
    return message.channel.send(
      `✅<@!${message.author.id}>, got it's license for being a moron.`
    );
  } catch (error) {
    return message.channel.send(
      `❌something is not right, cant register <@!${message.author.id}>`
    );
  }
};

const user_pp = async (message) => {
  let user = message.mentions.users.first() || message.author;
  const user_found = await User.findOne({ discord_id: user.id });

  if (!user_found)
    return message.channel.send(
      `❌ I'm sorry <@!${user.id}> but you're not registered yet`
    );

  let pp = "8";
  for (let x = 1; x <= user_found.pp_size; x++) {
    pp += "=";
  }
  pp += "D";

  console.log(message.author);
  view_pp_size.author.name = `${user.username}'s dick size`;
  view_pp_size.author.icon_url = user.displayAvatarURL();
  view_pp_size.footer.text = `Bruh you got ${user_found.pp_size} inch(es) dick 🍆`;
  view_pp_size.description = pp;

  return message.channel.send({ embed: view_pp_size });
};

module.exports = {
  view_profile,
  user_register,
  user_pp,
};
