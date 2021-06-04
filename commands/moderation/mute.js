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

                

                
                        
                

                let mutetime = args[1];
                if (!mutetime)
                    return message.reply("You didn't specify a time!");

('addrole command')
                return message.reply(`${message.mentions.users.first().username} has been muted`);

                setTimeout(function () {
                    user.removeRole(muterole.id);
                    message.channel.send(`${message.mentions.users.first().username} has been unmuted!`);
                }, ms(mutetime));
    

    
  

    }
};
