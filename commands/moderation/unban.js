module.exports = {
    name: 'unban',
    aliases: [],
    category: 'Moderation',
    utilisation: '{prefix}unban [User ID]',
    
    execute(client, message, args) {
        if (!message.member.hasPermission("BAN_MEMBERS")) {
                    return message.reply(
                        "You do not have the permission to use that command."
                    );
                }

                if (args.length === 0)
                    return message.reply("Please provide an ID");

                try {
                    const member = message.guild.members.unban(args[0]);
                    message.channel.send(
                        `The Member was unbanned.`
                    );
                } catch (err) {
                    message.channel.send(
                        "An error occured, Either I do not have a permission or user not found!"
                    );
                }
      }
    };
