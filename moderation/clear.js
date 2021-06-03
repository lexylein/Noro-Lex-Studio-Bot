module.exports = {
    name: 'clear',
    aliases: [],
    category: 'Moderation',
    utilisation: '{prefix}clear',    	
    	execute(client, message, args) {
    	if (!message.member.hasPermission('MANAGE_MESSAGES'))
        return message.reply('You do not have permissions to use that command');
        message.channel.bulkDelete(30);
        
        message.channel.send(`i Deletet 30 messages`)
                  .then((sent) => {
          setTimeout(() => {
            sent.delete();
          }, 2500);
        });
    }
};