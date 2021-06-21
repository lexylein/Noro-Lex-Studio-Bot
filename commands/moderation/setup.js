module.exports = {
    name: 'setup',
    aliases: [],
    category: 'Moderation',
    utilisation: '{prefix}setup',

    execute(client, message) {
       if (!message.member.hasPermission('ADMINISTRATOR'))
        return message.reply('You do not have permissions to use that command');
				 message.member.send(`Please move the role ** Noro Lex Studio Bot ** in first place in the order of the roles top, create a ** Music ** role for use a music commands and create a ** Muted ** role fpr mute user`); 
				 
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
}};

