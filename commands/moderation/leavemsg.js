const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
    name: 'leavemsg',
    aliases: ['leavemessage'],
    category: 'Moderation',
    utilisation: '{prefix}leavemsg [Message]',
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
				
				db.set(`leavemessage_${message.guild.id}`, newStr)
				let leavemessagedb = db.fetch(`leavemessage_${message.guild.id}`)
				message.channel.send(`the new leave message is: ${leavemessagedb}`)
	},
};