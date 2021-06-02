module.exports = {
    name: 'hello',
    aliases: [],
    category: 'Fun',
    utilisation: '{prefix}hello',    	

    execute(client, message) {
    	
        message.channel.send(`${client.emotes.hello} - hello user`);
				
		}
};