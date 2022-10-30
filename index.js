const fs = require('fs');
require('discord-reply');
const discord = require('discord.js');
const client = new discord.Client({ disableMentions: 'everyone' });
const jokes = [];
const db = require("quick.db");
const Discord = require('discord.js');
require("discord-buttons")(client);
require('discord-sliders')(client);
client.logger = require('./utils/logger');
client.color = require('./utils/color');
require('./utils/errorHandler')(client);
    

client.on("message", (message) => { 

    if (message.channel.type === "dm") {  
	
		if (message.author.id === ("844481386777280523")) return message.channel.send
	
		if (message.content === "Hello") {
			message.channel.send("Hello")
		}else if (message.content === "Who are you?") {
			message.channel.send("I´m Noro Lex Studio Bot the official bot from Noro Lex Studio")
		}else if (message.content === "What is your name?") {
			message.channel.send("Noro Lex Studio Bot")
		}else if (message.content === "How old are you?") {
			message.channel.send("I´m old")
		}else if (message.content === "I do not like you") {
			message.channel.send("when you don´t like me, why write you whit me?")
		}else if (message.content === "I like you") {
			message.channel.send("I like you to")
		}else if (message.content === "I love you") {
			message.channel.send("Why love you a bot")
		}else if (message.content === "I made you") {
			
			if (message.author.id === ("612589827262644234")) {
				message.channel.send("yes, you have made me dad")
			}else{
				message.channel.send("no, you have not made me Noro_Lex#3814 have made me")
			}

		}
		
    }else{
			
			let xp = db.fetch(`xp_${message.guild.id}_${message.author.id}`)
			
			db.add(`xp_${message.guild.id}_${message.author.id}`, 1)
			
			if (xp == 10000) {
				
				db.add(`rank_${message.guild.id}_${message.author.id}`, 1)
				db.set(`xp_${message.guild.id}_${message.author.id}`, 0)
			
				if (message.content === "Son!") {
					if (message.author.id === ("612589827262644234")) {
						message.channel.send("yes Dad, How can I help you?")
					}else{
						
						if (message.author.id === ("704778332180447343")) {
							message.channel.send("yes Dad, How can I help you?")
						}else{
							message.channel.send("you are not my Dad!")
						}
						
					}
				}else if (message.content === "Can you mute a user?") {
					if (message.author.id === ("612589827262644234")) {
						message.channel.send("yes Dad, I can mute a user say me who!")
					}else{
						
						if (message.author.id === ("704778332180447343")) {
							message.channel.send("yes Dad, I can mute a user say me who!")
						}else{
							message.channel.send("you are not my Dad!")
						}
						
					}
				}else if (message.content === "Who is the best Dad?") {
					if (message.author.id === ("612589827262644234")) {
						message.channel.send("you and Fuchsiii")
					}else{
						
						if (message.author.id === ("704778332180447343")) {
							message.channel.send("you and Noro_Lex")
						}else{
							message.channel.send("you are not my Dad!")
						}
						
					}
				}else if (message.content === "Can you ban a user?") {
					if (message.author.id === ("612589827262644234")) {
						message.channel.send("yes Dad, I can ban a user say me who!")
					}else{
						
						if (message.author.id === ("704778332180447343")) {
							message.channel.send("yes Dad, I can ban a user say me who!")     
						}else{
							message.channel.send("you are not my Dad!")
						}
						
					}
				}else if (message.content === "Can you kick a user?") {
					if (message.author.id === ("612589827262644234")) {
						message.channel.send("yes Dad, I can kick a user say me who!")
					}else{
						
						if (message.author.id === ("704778332180447343")) {
							message.channel.send("yes Dad, I can kick a user say me who!")     
						}else{
							message.channel.send("you are not my Dad!")
						}
						
					}
				}
				
			}else{
				
				if (message.content === "Son!") {
					if (message.author.id === ("612589827262644234")) {
						message.channel.send("yes Dad, How can I help you?")
					}else{
						
						if (message.author.id === ("704778332180447343")) {
							message.channel.send("yes Dad, How can I help you?")
						}else{
							message.channel.send("you are not my Dad!")
						}
						
					}
				}else if (message.content === "Can you mute a user?") {
					if (message.author.id === ("612589827262644234")) {
						message.channel.send("yes Dad, I can mute a user say me who!")
					}else{
						
						if (message.author.id === ("704778332180447343")) {
							message.channel.send("yes Dad, I can mute a user say me who!")
						}else{
							message.channel.send("you are not my Dad!")
						}
						
					}
				}else if (message.content === "Who is the best Dad?") {
					if (message.author.id === ("612589827262644234")) {
						message.channel.send("you and Fuchsiii")
					}else{
						
						if (message.author.id === ("704778332180447343")) {
							message.channel.send("you and Noro_Lex")
						}else{
							message.channel.send("you are not my Dad!")
						}
						
					}
				}else if (message.content === "Can you ban a user?") {
					if (message.author.id === ("612589827262644234")) {
						message.channel.send("yes Dad, I can ban a user say me who!")
					}else{
						
						if (message.author.id === ("704778332180447343")) {
							message.channel.send("yes Dad, I can ban a user say me who!")     
						}else{
							message.channel.send("you are not my Dad!")
						}
						
					}
				}else if (message.content === "Can you kick a user?") {
					if (message.author.id === ("612589827262644234")) {
						message.channel.send("yes Dad, I can kick a user say me who!")
					}else{
						
						if (message.author.id === ("704778332180447343")) {
							message.channel.send("yes Dad, I can kick a user say me who!")     
						}else{
							message.channel.send("you are not my Dad!")
						}
						
					}
				}
			
		}
		
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





client.on('guildMemberAdd', guildMember =>{
    const { MessageEmbed } = require('discord.js')
	
	let joinchanneldb = db.fetch(`joinchannel_${guildMember.guild.id}`)
	let joinmessagedb = db.fetch(`joinmessage_${guildMember.guild.id}`)
	let joinroledb = db.fetch(`joinrole_${guildMember.guild.id}`)

	let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === `${joinroledb}`);

	if (!joinchanneldb === null) {
	
		if (joinmessagedb === null) {
			db.set(`joinmessage_${guildMember.guild.id}`, `Welcome [USER] on [SERVER]`)
			let joinmessagedb = db.fetch(`joinmessage_${guildMember.guild.id}`)
		}
		
		let wchannel = guildMember.guild.channels.cache.find(channel => channel.name === `${joinchanneldb}`);
			
		newStr3 = joinmessagedb.replace('[USER]', `<@${guildMember.user.id}>`)
		newStr4 = newStr3.replace('[SERVER]', `${guildMember.guild.name}`)
		
		const embed = new MessageEmbed()
			.setColor('#ff0000')
			.setThumbnail(guildMember.guild.iconURL({ size: 2048, dynamic: true }))
			embed.setDescription(newStr4);
			embed.setTimestamp();
			embed.setFooter('This bot made by Noro Lex Studio (Noro Lex Studio Bot)');
		
		if(guildMember.guild.channels.cache.find(channel => channel.name === `${joinchanneldb}`)) {
			wchannel.send(embed);
		}
		
		if (welcomeRole === null) {
		}else{
			if(guildMember.guild.roles.cache.find(role => role.name === `${joinroledb}`)) {
				guildMember.roles.add(welcomeRole);
			}
		}
	}
});

client.on('guildMemberRemove', guildMember =>{
    const { MessageEmbed } = require('discord.js')
	
	let leavechanneldb = db.fetch(`leavechannel_${guildMember.guild.id}`)
	let leavemessagedb = db.fetch(`leavemessage_${guildMember.guild.id}`)

	if (!leavechanneldb === null) {
		if (leavemessagedb === null) {
			db.set(`leavemessage_${guildMember.guild.id}`, `bye [USER] we hope you had a good time on [SERVER]`)
			let leavemessagedb = db.fetch(`leavemessage_${guildMember.guild.id}`)
		}
		
		let lchannel = guildMember.guild.channels.cache.find(channel => channel.name === `${leavechanneldb}`);
		
		newStr1 = leavemessagedb.replace('[USER]', `<@${guildMember.user.id}>`)
		newStr2 = newStr1.replace('[SERVER]', `${guildMember.guild.name}`)

		const embed = new MessageEmbed()
        .setColor('#ff0000')
        .setThumbnail(guildMember.guild.iconURL({ size: 2048, dynamic: true }))
        embed.setDescription(newStr2);
        embed.setTimestamp();
        embed.setFooter('This bot made by Noro Lex Studio (Noro Lex Studio Bot)');
    
		if(guildMember.guild.channels.cache.find(channel => channel.name === `${leavechanneldb}`)) {
			lchannel.send(embed);
		}
	}
	
});
  
  
   //LOADER ALL UTILS FILES
  fs.readdir('./utils/', (err, files) => {
    if (err) client.logger.error(err);
    files.forEach((f) => {
        client.logger.loader(`[UTILS] ${client.color.chalkcolor.green(f)} is charged`);
        client[f.split('.')[0]] = require(`./utils/${f}`);
    });
    client.logger.loader(`[UTILS] ${client.color.chalkcolor.red('[FINISH]')} ${files.length} loaded utils`);
  });


   //LOADER ALL LANGUAGUES FILES
   fs.readdir('./language/', (err, files) => {
    if (err) client.logger.error(err);
    files.forEach((f) => {
        client.logger.loader(`[LANGUAGE] ${client.color.chalkcolor.green(f)} is charged`);
        client[f.split('.')[0]] = require(`./language/${f}`);
    });
    client.logger.loader(`[LANGUAGE] ${client.color.chalkcolor.red('[FINISH]')} ${files.length} loaded languages`);
  });



client.on('guildCreate', guild => {
	
	if ( undefined == guild.systemChannel) {
		
		//client.logger.error(`guild.systemChannel does not exist during guildCreate callback`)
		
    }
    else if( ( guild.systemChannel) && ( !guild.systemChannel.permissionsFor(guild.me).has('SEND_MESSAGES') ) ) {
		
        //client.logger.error(`guild.systemChannel permissions to write are not available, during guildCreate callback`)
		
    }
    else {
		
        //Sends message to system channel
        guild.systemChannel.send(`Hello, I'm The Noro Lex Studio Bot. Thanks for inviting me, to chnage the language use "!n language [language]"`)
		
	}
  
});



const { DiscordMenus, ButtonBuilder, MenuBuilder } = require('discord-menus');
const { Client, MessageEmbed }  = require('discord.js');
const { Console } = require('console');
const MenusManager = new DiscordMenus(client);

const myCoolMenu = new MenuBuilder()
    .addLabel('fun', { description: 'see all fun commands', value: 'value-fun' })
    .addLabel('giveaway', { description: 'see all giveaway commands', value: 'value-giveaway' })
	.addLabel('economy', { description: 'see all economy commands', value: 'value-economy' })
	.addLabel('prime', { description: 'see all prime commands', value: 'value-prime' })
	.addLabel('moderation', { description: 'see all moderation commands', value: 'value-moderation' })
	.addLabel('music', { description: 'see all music commands', value: 'value-music' })
    .setMaxValues(1)
    .setMinValues(1)
    .setCustomID('cool-custom-id')
    .setPlaceHolder('Select an option');

client.on('message', async (message) => {
    if (message.content === '!n menu') {

        MenusManager.sendMenu(message, new MessageEmbed().setDescription('select a help option'), { menu: myCoolMenu })
    }
});

MenusManager.on('MENU_CLICKED', (menu) => {
	
	client.logger.info(menu.values);
	
});

client.ws.on('INTERACTION_CREATE', async message => {

	

});

client.login(client.config.discord.token);
