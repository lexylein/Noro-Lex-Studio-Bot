module.exports = {
    name: 'debug',
    aliases: [],
    category: 'Moderation',
    utilisation: '{prefix}debug',

    execute(client, message) {
       if (!message.member.hasPermission('ADMINISTRATOR'))
        return message.reply('You do not have permissions to use that command');
         message.channel.send(`${client.emotes.success} - ${client.user.username} connected in **${client.voice.connections.size}** channels from **${client.guilds.cache.size}** servers`); 
      
    
    },
};