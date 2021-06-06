module.exports = {
    name: 'version',
    aliases: [],
    category: 'Moderation',
    utilisation: '{prefix}version',

    execute(client, message) {
      if (!message.member.hasPermission('ADMINISTRATOR'))
        return message.reply('You do not have permissions to use that command');
        message.channel.send(`The Version of The Bot is: 1.7.0`);
    },
};
