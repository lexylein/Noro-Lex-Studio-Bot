module.exports = {
    name: 'unmute',
    aliases: [],
    category: 'Moderation',
    utilisation: '{prefix}unmute [user]',    	

    execute(client, message, args) {
        
        if(!message.guild.channels.cache.find(channel => channel.name === `bot-log`)) {
            return message.reply('you have not setup the server');
        }
    	
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
                    return message.reply("Can't unmute user!");

                    
                    let verifiziert1 = message.guild.roles.cache.find(r => r.name === "Verifiziert");
                    
                    let verifiziert2 = message.guild.roles.cache.find(r => r.name === "verifiziert");
                    
                    let mute = message.guild.roles.cache.find(r => r.name === "Muted");
                    
                    let member = message.mentions.members.first();

        let moderationEmbed = new MessageEmbed()
            .setColor('#ff0000')
            .setTitle("**__Moderation System__**")
            .setDescription(`**<@${member.user.id}> has been unmuted by <@${message.author.id}>**`)
            .addField(`**Action:**`, `\`unmute\``)
            .addField(`**Moderator:**`, `${message.author}`)

                member.roles.add(verifiziert1).catch(console.error);
                member.roles.add(verifiziert2).catch(console.error);
                member.roles.remove(mute).catch(console.error);
                return message.reply(moderationEmbed);

        const LogChannel = message.guild.channels.cache.find(channel => channel.name === `bot-log`);
        
        const channel = LogChannel;
        
        channel.send(moderationEmbed);
        
    }
};

