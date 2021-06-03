module.exports = {
    name: 'userid',
    aliases: [],
    category: 'Moderation',
    utilisation: '{prefix}userid [user]',    	

    execute(client, message) {
    	
      message.channel.send(`the user id of ${message.mentions.users.first().username} is ${message.mentions.users.first().id}`)
  }
  
};