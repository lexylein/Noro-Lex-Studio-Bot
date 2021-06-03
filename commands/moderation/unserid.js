module.exports = {
    name: 'userid',
    aliases: [],
    category: 'Moderation',
    utilisation: '{prefix}userid [user]',    	

    execute(client, message) {
    	
      if (!message.member.hasPermission('KICK_MEMBERS'))
        return message.reply('You do not have permissions to use that command');
        
        message.channel.send(`the id from ${message.mentions.users.first().username} id ${message.mentions.users.first().id}`)
  }
  
};
