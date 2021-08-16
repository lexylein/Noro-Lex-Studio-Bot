module.exports = {
    name: 'setup',
    aliases: [],
    category: 'Moderation',
    utilisation: '{prefix}setup',

    execute(client, message) {
       if (!message.member.hasPermission('ADMINISTRATOR'))
        return message.reply('You do not have permissions to use that command');
				 
				if(message.guild.channels.cache.find(channel => channel.name === `bot-log`)) {
            return message.reply('you already have setup the server');
        }
        
				 message.guild.channels.create(`Bot-Log`, {
            permissionOverwrites: [
                {
                    id: message.guild.roles.everyone,
                    deny: ['VIEW_CHANNEL'],
                },
            ],
            type: 'text',
        }).then(async channel => {
            message.reply('you have successfully setup the server')
				 
    })
        
        message.guild.roles.create({
        data: {
          name: "Muted",
          color: "#c2d3e0",
          permissions: []
        }})
        
        message.guild.roles.create({
        data: {
          name: "Music",
          color: "#c2d3e0",
          permissions: ['EMBED_LINKS', 'USE_EXTERNAL_EMOJIS', 'VIEW_CHANNEL', 'ADD_REACTIONS', 'STREAM', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'CONNECT', 'SPEAK', 'CHANGE_NICKNAME',]
        }})
        
}};
