module.exports = {
    name: 'setup',
    aliases: [],
    category: 'Moderation',
    utilisation: '{prefix}setup',

    execute(client, message) {
       if (!message.member.hasPermission('ADMINISTRATOR'))
        return message.reply('You do not have permissions to use that command');
				 message.member.send(`create a ** Red ** role, create a ** Music ** role for use a music commands and create a ** Muted ** role fpr mute user`); 
				 
				
				 
				 
    }
};
