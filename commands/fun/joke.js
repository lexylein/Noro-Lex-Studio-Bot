const db = require("quick.db");

module.exports = {
    name: 'joke',
    aliases: [],
    category: 'Fun',
    utilisation: '{prefix}joke',
    
	execute(client, message, args) {
		
		const jokes = [
		  client.language.joke1,
		  client.language.joke2,
		  client.language.joke3,
		  client.language.joke4,
		  client.language.joke5,
		  client.language.joke6,
		  client.language.joke7,
		  client.language.joke8,
		  client.language.joke9,
		  client.language.joke10,
		  client.language.joke11,
		  client.language.joke12,
		  client.language.joke13,
		  client.language.joke14,
		  client.language.joke15,
		  client.language.joke16,
		  client.language.joke17,
		  client.language.joke18,
		  client.language.joke19,
		  client.language.joke20,
		];

		
		message.channel.send(jokes[Math.floor(Math.random() * jokes.length)]);
		
}
};