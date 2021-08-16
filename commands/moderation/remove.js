module.exports = {
    name: 'remove',
    aliases: [],
    category: 'Moderation',
    utilisation: '{prefix}remove [User]',
	execute(client, message, args, prefix) {
        if (!message.member.hasPermission("ADMINISTRATOR")) {
                    return message.reply(
                        "You do not have the permission to use that command."
                    );
                }
		if(message.channel.name.includes('ticket-')) {
			const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(' ') || x.user.username === args[0]);
			if(!member) {
				return message.channel.send(`Incorrect Usage! Correct Usage: !n remove [User]`);
			}
			try{
				message.channel.updateOverwrite(member.user, {
					VIEW_CHANNEL: false,
					SEND_MESSAGES: false,
					ATTACH_FILES: false,
					READ_MESSAGE_HISTORY: false,
				}).then(() => {
					message.channel.send(`Successfully removed ${member} from ${message.channel}`);
				});
			}
			catch(e) {
				return message.channel.send('An error occurred, please try again!');
			}
		}
	},
};