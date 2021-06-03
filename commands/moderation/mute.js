module.exports = {
    name: 'userid',
    aliases: [],
    category: 'Moderation',
    utilisation: '{prefix}userid [user]',    	

    execute(client, message) {
    	
    	 if (!message.member.hasPermission('MANAGE_ROLE'))
        return message.reply('You do not have permissions to use that command');
        
        if (!message.mentions.users.first()) return message.reply("You need to mention someone to mute a user"); 
        
        
   }
  
};
