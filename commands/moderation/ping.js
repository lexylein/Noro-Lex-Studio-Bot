module.exports = {
    name: 'ping',
    aliases: [],
    category: 'Moderation',
    utilisation: '{prefix}ping',

    execute(client, message) {
      if (!message.member.hasPermission('ADMINISTRATOR'))
        return message.reply('You do not have permissions to use that command');
        message.channel.send(`${client.emotes.success} - Ping : **${client.ws.ping}ms** !`);
				
    },
};