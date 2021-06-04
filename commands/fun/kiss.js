module.exports = {
    name: 'kiss',
    aliases: [],
    category: 'Fun',
    utilisation: '{prefix}kiss [user]',    	

    execute(client, message) {
    	
    	if (!message.mentions.users.first()) return message.reply("You need to mention someone to kiss a user"); 
    	
    	if (message.mentions.users.first().id === message.author.id) return message.reply('wait , why you want to kiss yourself?');
    	
message.channel.send(`OwO, ${message.author.username} has kissed ${message.mentions.users.first().username}`)
		}
};
