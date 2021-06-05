module.exports = {
    name: 'mute',
    aliases: [],
    category: 'Moderation',
    utilisation: '{prefix}mute [user]',    	

    execute(client, message, args) {
    	
    	if (!message.member.hasPermission("MANAGE_ROLES")) {
                    return message.reply(
                        "You do not have the permission to use that command."
                    );
                }

                if (args.length === 0)
                    return message.reply(" need to mention someone to mute a user");

                let user = message.guild.member(
                    message.mentions.users.first() ||
                        message.guild.members.cache.get(args[0])
                );

                if (!user) return message.reply("Couldn't find user.");

                if (user.hasPermission("MANAGE_MESSAGES"))
                    return message.reply("Can't mute user!");

                    
                    let role = message.guild.roles.cache.find(r => r.name === "Muted");
                    
                    let member = message.mentions.members.first();


                member.roles.add(role).catch(console.error);
                return message.reply(`${message.mentions.users.first().username} has been muted!`);

    }
};
