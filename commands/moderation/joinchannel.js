const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
    name: 'joinchannel',
    aliases: [],
    category: 'Moderation',
    utilisation: '{prefix}joinchannel [Message]',
	execute(client, message, args) {
        if (!message.member.hasPermission("ADMINISTRATOR")) {
                    return message.reply(
                        "You do not have the permission to use that command."
                    );
                }
				
				let tmp = message.content.substring(message.length).split(' ')
				args = []

				for (let i = 2; i < tmp.length; i++) {
					args.push(tmp[i])
				}
				
				const search = ','  
				const replacer = new RegExp(search, 'g')

				const string = args.toString()
				
				newStr = string.replace(replacer, '-')
				
				if(!message.guild.channels.cache.find(channel => channel.name === newStr)) {
					return message.reply(
                        "this channel is not exist."
                    );
				}
				
				db.set(`joinchannel_${message.guild.id}`, newStr)
				let joinchanneldb = db.fetch(`joinchannel_${message.guild.id}`)
				message.channel.send(`the new join channel is: ${joinchanneldb}`)
	},
};