const superagent = require("snekfetch");
require('discord-inline-reply');
const Discord = require('discord.js')
const db = require("quick.db");

module.exports = {
    name: 'info',
    aliases: [],
    category: 'Moderation',
    utilisation: '{prefix}info',
    
    execute(client, message, args) {

		let np_perm = client.language.No_Permission

		no_perm_message = np_perm.replace('[USER]', `<@${message.author.id}>`)
      
		if (!message.member.hasPermission('ADMINISTRATOR'))
			return message.lineReplyNoMention(no_perm_message);
	
		let primedb = db.fetch(`prime_${message.guild.id}`)
		let prime = client.language.Prime
		let leavemsgdb = db.fetch(`leavemessage_${message.guild.id}`)
		let leavemsg = client.language.LM
		let leavechannelgdb = db.fetch(`leavechannel_${message.guild.id}`)
		let leavechannelg = client.language.LC
		let joinmsgdb = db.fetch(`joinmessage_${message.guild.id}`)
		let joinmsg = client.language.JM
		let joinchannelgdb = db.fetch(`joinchannel_${message.guild.id}`)
		let joinchannelg = client.language.JC
		let joinroledb = db.fetch(`joinrole_${message.guild.id}`)
		let joinrole = client.language.JR
		let languagedb = db.fetch(`lang_${message.guild.id}`)
		let language = client.language.Language

		const infoembed = new Discord.MessageEmbed()
		infoembed.setTitle("Bot Server Infos");
		infoembed.setThumbnail(message.guild.iconURL({ size: 2048, dynamic: true }));
		infoembed.setColor(`#ff0000`);
		infoembed.setDescription(`${prime} ${primedb} \n ${leavechannelg} ${leavechannelgdb} \n ${leavemsg} ${leavemsgdb} \n ${joinchannelg} ${joinchannelgdb} \n ${joinmsg} ${joinmsgdb} \n ${joinrole}  ${joinroledb} \n ${language} ${languagedb}`);
		infoembed.setTimestamp();
		infoembed.setFooter(client.language.INFO);
			
		message.channel.send(infoembed);		
      
    },
};