const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
    name: 'joinrole',
    aliases: [],
    category: 'Moderation',
    utilisation: '{prefix}joinrole [Role]',
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

				if(!message.guild.roles.cache.find(role => role.name === newStr)) {
					return message.reply(
                        "this role is not exist."
                    );
				}
				
				db.set(`joinrole_${message.guild.id}`, newStr)
				let joinroledb = db.fetch(`joinrole_${message.guild.id}`)
				message.channel.send(`the new join channel is: ${joinroledb}`)
	},
};