module.exports = {
    name: 'version',
    aliases: [],
    category: 'Moderation',
    utilisation: '{prefix}version',

    execute(client, message) {
        message.channel.send(`The Version of The Bot is: 1.12.6`);
    },
};
