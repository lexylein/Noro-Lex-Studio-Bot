const superagent = require("snekfetch");
const Discord = require('discord.js')
const db = require("quick.db");

module.exports = {
    name: 'xp',
    aliases: [],
    category: 'Fun',
    utilisation: '{prefix}xp',
    
	execute(bot, message, args) {
		
		let xpdb = db.fetch(`xp_${message.guild.id}_${message.author.id}`)
		let xp = -1
			
			if (xp < xpdb) {
				
				const levelembed = new Discord.MessageEmbed()
				levelembed.setTitle("global level system");
				levelembed.setThumbnail(message.author.avatarURL({ size: 2048, dynamic: true }));
				levelembed.setColor(`#ff0000`);
				levelembed.setDescription(`<@${message.author.id}> youre server XP is ${xpdb}/10000`);
				levelembed.setTimestamp();
				levelembed.setFooter(client.language.INFO);
			
				message.channel.send(levelembed);
				
			}else{
				
				db.set(`xp_${message.guild.id}_${message.author.id}`, 0)
				
				let xpdb = db.fetch(`xp_${message.guild.id}_${message.author.id}`)
				
				const levelembed = new Discord.MessageEmbed()
				levelembed.setTitle("level system");
				levelembed.setThumbnail(message.author.avatarURL({ size: 2048, dynamic: true }));
				levelembed.setColor(`#ff0000`);
				levelembed.setDescription(`<@${message.author.id}> youre global XP is ${xpdb}`);
				levelembed.setTimestamp();
				levelembed.setFooter(client.language.INFO);
			
				message.channel.send(levelembed);
				
			}
			
	}
};