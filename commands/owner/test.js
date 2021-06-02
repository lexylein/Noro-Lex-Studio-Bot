module.exports = {
    name: 'test',
    aliases: [],
    category: 'Fun',
    utilisation: '{prefix}test',    	

    execute(client, message) {
    	
    	if(message.author.id === "612589827262644234") return message.reply('hallo');
    	
    	message.channel.send('you are not a Owner of the Bot')
    	
    }
};