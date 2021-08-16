module.exports = {
    name: 'wartungen',
    aliases: [],
    category: 'Owner',
    utilisation: '{prefix}wartungen',    	

    execute(client, message) {
    	
    	message.channel.bulkDelete(1);
    	
    	if(message.author.id === "612589827262644234") return message.channel.send('the bot is in maintenance work');
    	
    	message.channel.send('you are not a Owner from the Bot')
    	
    }
};
