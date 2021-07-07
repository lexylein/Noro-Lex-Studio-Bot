const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'close',
    aliases: ['del'],
    category: 'Moderation',
    utilisation: '{prefix}close',
	execute(client, message, args) {
        
        if(!message.guild.channels.cache.find(channel => channel.name === `bot-log`)) {
            return message.reply('you have not setup the server use ```!n setup```');
        }
        
		           if (!message.member.hasPermission("ADMINISTRATOR")) {
                    return message.reply(
                        "You do not have the permission to use that command."
                    );
                }
        
        let moderationEmbed = new MessageEmbed()
            .setColor('#ff0000')
            .setTitle("**__Moderation System__**")
            .setDescription(`**<@${message.author.id}> close a ticket**`)
            .addField(`**Action:**`, `\`ticket\``)
            .addField(`**Ticket:**`, `#ticket-error`)
        
		
		if(message.channel.name.includes('ticket-')) {
			message.channel.delete();
            
            let logchannel = message.guild.channels.cache.find(channel => channel.name === `bot-log`)
			if(logchannel) {
				logchannel.send(moderationEmbed);
                
		}}
		else {
			return message.reply('you cannot use this command here. Please use this command when you want to delete a ticket.');
		}
		 
	},
};
