module.exports = {
    name: 'ban',
    aliases: [],
    category: 'Moderation',
    utilisation: '{prefix}ban [User ID]',
    
    execute(client, message, args) {
        
        if(!message.guild.channels.cache.find(channel => channel.name === `bot-log`)) {
            return message.reply('have not setup the server use ```!n setup```');
        }
        
        if (!message.member.hasPermission("BAN_MEMBERS")) {
                    return message.reply(
                        "You do not have the permission to use that command."
                    );
                }

                if (args.length === 0)
                    return message.reply("Please provide an ID");

                try {
                    const member = message.guild.members.ban(args[0]);
                    message.channel.send(
                        `The Member was banned.`
                    );
                } catch (err) {
                    message.channel.send(
                        "An error occured, Either I do not have a permission or user not found!"
                    );
                }
      }
    };