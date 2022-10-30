const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
    name: 'joinmsg',
    aliases: ['joinmessage'],
    category: 'Moderation',
    utilisation: '{prefix}joinmsg [Message]',
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
				
				newStr = string.replace(replacer, ' ')
				
				db.set(`joinmessage_${message.guild.id}`, newStr)
				let joinmessagedb = db.fetch(`joinmessage_${message.guild.id}`)
				message.channel.send(`the new join message is: ${joinmessagedb}`)
	},
};