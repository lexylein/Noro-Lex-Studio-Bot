module.exports = {
    name: 'maintenance',
    aliases: [],
    category: 'Owner',
    utilisation: '{prefix}maintenance',  	

    execute(client, message) {
    	
    	message.channel.bulkDelete(1);
    	
    	if(message.author.id === "612589827262644234") return message.channel.send('the bot is in maintenance work');
    	
    	message.channel.send(client.language.No_Owner)
    	
    }
};
