const fs = require('fs');
const discord = require('discord.js');
const client = new discord.Client({ disableMentions: 'everyone' });

client.on("message", (message) => {
    
    if (message.author.id === ("bot id")) return message.channel.send()
    
    if (message.channel.type === "dm") { 
        
    message.channel.send('hello')
        
    }
    
});

const { GiveawaysManager } = require('discord-giveaways');
client.giveawaysManager = new GiveawaysManager(client, {
    storage: "./giveaways.json",
    updateCountdownEvery: 5000,
    default: {
        botsCanWin: false,
        embedColor: "#ff0000",
        reaction: "🎉"
    }
});
// We now have a client.giveawaysManager property to manage our giveaways!

client.giveawaysManager.on("giveawayReactionAdded", (giveaway, member, reaction) => {
});

client.giveawaysManager.on("giveawayReactionRemoved", (giveaway, member, reaction) => {
});

client.giveawaysManager.on("giveawayEnded", (giveaway, winners) => {
});


const { Player } = require('discord-player');

client.player = new Player(client);
client.config = require('./config/bot');
client.emotes = client.config.emojis;
client.filters = client.config.filters;
client.commands = new discord.Collection();

fs.readdirSync('./commands').forEach(dirs => {
	const commands = fs
		.readdirSync(`./commands/${dirs}`)
		.filter(files => files.endsWith('.js'));

	for (const file of commands) {
		const command = require(`./commands/${dirs}/${file}`);
		console.log(`Loading command ${file}`);
		client.commands.set(command.name.toLowerCase(), command);
	}
});

const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
const player = fs.readdirSync('./player').filter(file => file.endsWith('.js'));

for (const file of events) {
	console.log(`Loading discord.js event ${file}`);
	const event = require(`./events/${file}`);
	client.on(file.split('.')[0], event.bind(null, client));
}

for (const file of player) {
	console.log(`Loading discord-player event ${file}`);
	const event = require(`./player/${file}`);
	client.player.on(file.split('.')[0], event.bind(null, client));
}











client.login(client.config.discord.token);
