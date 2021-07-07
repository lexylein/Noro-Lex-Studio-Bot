const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'mute',
    aliases: [],
    category: 'Moderation',
    utilisation: '{prefix}mute [user]',    	

    execute(client, message, args) {
        
        if(!message.guild.channels.cache.find(channel => channel.name === `bot-log`)) {
            return message.reply('have not setup the server use ```!n setup```');
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
                    return message.reply("Can't mute user!");
                    
                    let mute = message.guild.roles.cache.find(r => r.name === "Muted");
                    
                    let member = message.mentions.members.first();

let moderationEmbed = new MessageEmbed()
            .setColor('#ff0000')
            .setTitle("**__Moderation System__**")
            .setDescription(`**<@${member.user.id}> has been muted by <@${message.author.id}>**`)
            .addField(`**Action:**`, `\`mute\``)
            .addField(`**Moderator:**`, `${message.author}`)
        
                member.roles.add(mute).catch(console.error);
        
        const LogChannel = message.guild.channels.cache.find(channel => channel.name === `bot-log`);
        
        const channel = LogChannel;
        
        channel.send(moderationEmbed);

    }
};

