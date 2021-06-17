module.exports = {
    name: 'add',
    aliases: [],
    category: 'Moderation',
    utilisation: '{prefix}add [User]',
	execute(client, message, args, prefix) {
        if (!message.member.hasPermission("ADMINISTRATOR")) {
                    return message.reply(
                        "You do not have the permission to use that command."
                    );
                }
		if(message.channel.name.includes('ticket-')) {
			const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(' ') || x.user.username === args[0]);
			if(!member) {
				return message.channel.send(`Incorrect Usage! Correct Usage:${prefix}add [User]`);
			}
			try{
				message.channel.updateOverwrite(member.user, {
					VIEW_CHANNEL: true,
					SEND_MESSAGES: true,
					ATTACH_FILES: true,
					READ_MESSAGE_HISTORY: true,
				}).then(() => {
					message.channel.send(`Successfully added ${member} to ${message.channel}`);
				});
			}
			catch(e) {
				return message.channel.send('An error occurred, please try again!');
			}
		}
	},
};
