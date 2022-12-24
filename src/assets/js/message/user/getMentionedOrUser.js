module.exports = (message) => {
    const [mentioned] = message.mentions.users.map((item) => item)
    const user = mentioned || message.author;

    return user;
}