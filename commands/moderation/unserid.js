module.exports = {
    name: 'userid',
    aliases: [],
    category: 'Moderation',
    utilisation: '{prefix}userid [user]',    	

    execute(client, message) {
    	
    	 if (!message.member.hasPermission('KICK_MEMBERS'))
        return message.reply('You do not have permissions to use that command');
        
        if (!message.mentions.users.first()) return message.reply("You need to mention someone to see a user id"); 
        
        message.channel.send(`the id from ${message.mentions.users.first().username} id ${message.mentions.users.first().id}`)
   }
  
};
