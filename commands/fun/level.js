const superagent = require("snekfetch");
const Discord = require('discord.js')
const db = require("quick.db");

module.exports = {
    name: 'level',
    aliases: ['lvl'],
    category: 'Fun',
    utilisation: '{prefix}level',
    
	execute(client, message, bot, args) {
		
		let leveldb = db.fetch(`rank_${message.guild.id}_${message.author.id}`)
		let level = 0
			
			if (level < leveldb) {
				
				const levelembed = new Discord.MessageEmbed()
				levelembed.setTitle("level system");
				levelembed.setThumbnail(message.author.avatarURL({ size: 2048, dynamic: true }));
				levelembed.setColor(`#ff0000`);
				levelembed.setDescription(`<@${message.author.id}> youre server level is ${leveldb}`);
				levelembed.setTimestamp();
				levelembed.setFooter(client.language.INFO);
			
				message.channel.send(levelembed);
			
			}else{
				
				db.set(`rank_${message.guild.id}_${message.author.id}`, 1)
				
				let leveldb = db.fetch(`rank_${message.guild.id}_${message.author.id}`)
				
				const levelembed = new Discord.MessageEmbed()
				levelembed.setTitle("level system");
				levelembed.setThumbnail(message.author.avatarURL({ size: 2048, dynamic: true }));
				levelembed.setColor(`#ff0000`);
				levelembed.setDescription(`<@message.author.id> youre global level is ${leveldb}`);
				levelembed.setTimestamp();
				levelembed.setFooter(client.language.INFO);
				
				message.channel.send(levelembed);
			}
			
	}
};