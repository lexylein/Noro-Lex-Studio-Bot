module.exports = {
    name: 'fight',
    aliases: [],
    category: 'Fun',
    utilisation: '{prefix}fight [user]',    	

    execute(client, message) {
    	
    	if (!message.mentions.users.first()) return message.reply("You need to mention someone to fight whit a user"); 
  if(message.mentions.users.first().id === message.author.id) return message.reply('you cannot fight with yourself'); 
      message.channel.send(`${message.author.username} will fight whit you ${message.mentions.users.first().username}`)
  }
  
};