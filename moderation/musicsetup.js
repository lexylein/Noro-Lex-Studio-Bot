module.exports = {
    name: 'musicsetup',
    aliases: [],
    category: 'Moderation',
    utilisation: '{prefix}musicsetup',

    execute(client, message) {
       if (!message.member.hasPermission('ADMINISTRATOR'))
        return message.reply('You do not have permissions to use that command');
				 message.member.send(`Create a ** Music ** role and add the role to you.`); 
				 
				
				 
				 
    }
};