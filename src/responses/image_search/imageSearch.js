const GoogleImages = require("google-images");
const { MessageEmbed } = require("discord.js");
require("dotenv").config();
const client = new GoogleImages(process.env.CSE_ID, process.env.GOOGLE_API_KEY);
const messageFlags = require("../../assets/js/message/content/contentFlags");
module.exports = (() => {
	const search = async (message, flag) => {
		try {
			const [, , word] = messageFlags(message);
			const images = await client.search(word);
			const filteredImages = images.filter((img) =>
				img.url.endsWith("jpg")
			);
			const embed = new MessageEmbed()
				.setImage(filteredImages[0].url)
				.setDescription(filteredImages[0].description)
				.setAuthor(
					message.author.username,
					message.author.displayAvatarURL()
				)
				.setFooter(
					`Google Images: 1 out of ${filteredImages.length} results`,
					"https://wplawpractice.com/wp-content/uploads/2017/07/google-logo.jpg"
				);

			await message.react("👍");
			return message.reply(embed);
		} catch (error) {
			return console.log(error);
		}
	};
	return { search };
})();
