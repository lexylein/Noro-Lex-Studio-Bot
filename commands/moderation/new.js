const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'new',
    aliases: [],
    category: 'Moderation',
    utilisation: '{prefix}new',    	
	execute(client, message, args, prefix) {
        
        if(!message.guild.channels.cache.find(channel => channel.name === `bot-log`)) {
            return message.reply('you have not setup the server use ```!n setup```');
        }
        
		if(message.guild.channels.cache.find(channel => channel.name === `ticket-${message.author.id}`)) {
			return message.reply('you already have a ticket, please close your exsisting ticket first before opening a new one!');
		}

        let moderationEmbed = new MessageEmbed()
            .setColor('#ff0000')
            .setTitle("**__Moderation System__**")
            .setDescription(`**<@${message.author.id}> created a ticket**`)
            .addField(`**Action:**`, `\`ticket\``)
            .addField(`**Ticket:**`, `#ticket-${message.author.id}`)
        
		message.guild.channels.create(`ticket-${message.author.id}`, {
			permissionOverwrites: [
				{
					id: message.author.id,
					allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
				},
				{
					id: message.guild.roles.everyone,
					deny: ['VIEW_CHANNEL'],
				},
			],
			type: 'text',
		}).then(async channel => {
			message.reply(`you have successfully created a ticket! Please click on ${channel} to view your ticket.`);
			channel.send(`Hi ${message.author}, welcome to your ticket! Please be patient, we will be with you shortly. If you would like to close this ticket please run \`!n close\``);
			let logchannel = message.guild.channels.cache.find(channel => channel.name === `bot-log`)
			if(logchannel) {
				logchannel.send(moderationEmbed);
			}
		});
	},
};
