const fs = require('fs');
const discord = require('discord.js');
const client = new discord.Client({ disableMentions: 'everyone' });
const jokes = [
  "Hello.",
  "Who are you?",
  "How old are you?",
  "What is your name?",
  "I do not like you!",
  "I like you!",
];
    

client.on("message", (message) => {
    if (message.author.id === ("844481386777280523")) return message.channel.send
    
    if (message.channel.type === "dm") { 
        
    message.channel.send(jokes[Math.floor(Math.random() * jokes.length)]);
        
    }
    
});

const { GiveawaysManager } = require('discord-giveaways');
client.giveawaysManager = new GiveawaysManager(client, {
    storage: "./giveaways.json",
    updateCountdownEvery: 5000,
    default: {
        botsCanWin: false,
        embedColor: "#ff0000",
        reaction: ":tada:"
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

client.on('guildMemberAdd', guildMember =>{
        const { MessageEmbed } = require('discord.js')
        let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Member');
           let wchannel = guildMember.guild.channels.cache.find(channel => channel.name === 'welcome');
 
        guildMember.roles.add(welcomeRole);
    
        const embed = new MessageEmbed()
        .setColor('#ff0000')
        .setThumbnail(guildMember.guild.iconURL({ size: 2048, dynamic: true }))
        embed.setDescription(`Welcome <@${guildMember.user.id}> on ${guildMember.guild.name}`);
        embed.setTimestamp();
        embed.setFooter('This bot made by Noro Lex Studio (Noro Lex Studio Bot)');
        wchannel.send(embed);
});

client.on('guildMemberRemove', guildMember =>{
        const { MessageEmbed } = require('discord.js')
        let lchannel = guildMember.guild.channels.cache.find(channel => channel.name === 'leave');

        const embed = new MessageEmbed()
        .setColor('#ff0000')
        .setThumbnail(guildMember.guild.iconURL({ size: 2048, dynamic: true }))
        embed.setDescription(`bye <@${guildMember.user.id}> we hope you had a good time on ${guildMember.guild.name}`);
        embed.setTimestamp();
        embed.setFooter('This bot made by Noro Lex Studio (Noro Lex Studio Bot)');
        lchannel.send(embed);
});

client.login(client.config.discord.token);
