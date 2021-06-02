module.exports = {
    name: 'cuddle',
    aliases: [],
    category: 'Fun',
    utilisation: '{prefix}cuddle [user]',    	

    execute(client, message) {
    	
    	if (!message.mentions.users.first()) return message.reply("You need to mention someone to kiss a user"); 
    	
    	if (message.mentions.users.first().id === message.author.id) return message.reply('wait , why you want to cuddle yourself?');
    	
message.channel.send(`OwO, ${message.author.username} has cuddle ${message.mentions.users.first().username}`)
message.channel.send('https://tenor.com/view/peachcat-cuddle-hug-back-hug-love-gif-14541113')
		}
};