const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    aliases: [],
    category: 'Core',
    utilisation: '{prefix}help',
	
    async execute(client, message) {
		
		const fun = message.client.commands.filter(x => x.category == 'Fun').map((x) => '`' + x.name + '`').join(', ');
        const giveaway = message.client.commands.filter(x => x.category == 'Giveaway').map((x) => '`' + x.name + '`').join(', ');
        const economy = message.client.commands.filter(x => x.category == 'Economy').map((x) => '`' + x.name + '`').join(', ');
        const moderation = message.client.commands.filter(x => x.category == 'Moderation').map((x) => '`' + x.name + '`').join(', ');
        const music = message.client.commands.filter(x => x.category == 'Music').map((x) => '`' + x.name + '`').join(', ');
		const botowner = message.client.commands.filter(x => x.category == 'Owner').map((x) => '`' + x.name + '`').join(', ');
        const nsfw = message.client.commands.filter(x => x.category == 'Nsfw').map((x) => '`' + x.name + '`').join(', ');
		
        let embed0 = new MessageEmbed()
			.setColor(`#ff0000`)
            .setAuthor('Help pannel')
			.addFields({ name: '**Fun**', value: fun })
            .setFooter(client.language.INFO)
            .setTimestamp(new Date())
            .setDescription(`${client.emotes.success} - Support Server: https://discord.gg/FCJY3W5nBS`)
        let embed1 = new MessageEmbed()
			.setColor(`#ff0000`)
            .setAuthor('Help pannel')
			.addFields({ name: '**Giveaway**', value: giveaway })
            .setFooter(client.language.INFO)
            .setTimestamp(new Date())
            .setDescription(`${client.emotes.success} - Support Server: https://discord.gg/FCJY3W5nBS`)
		let embed2 = new MessageEmbed()
			.setColor(`#ff0000`)
            .setAuthor('Help pannel')
			.addFields({ name: '**Economy**', value: economy })
            .setFooter(client.language.INFO)
            .setTimestamp(new Date())
            .setDescription(`${client.emotes.success} - Support Server: https://discord.gg/FCJY3W5nBS`)
		let embed4 = new MessageEmbed()
			.setColor(`#ff0000`)
            .setAuthor('Help pannel')
			.addFields({ name: '**Moderation**', value: moderation })
            .setFooter(client.language.INFO)
            .setTimestamp(new Date())
            .setDescription(`${client.emotes.success} - Support Server: https://discord.gg/FCJY3W5nBS`)
		let embed5 = new MessageEmbed()
			.setColor(`#ff0000`)
            .setAuthor('Help pannel')
			.addFields({ name: '**Music**', value: music })
            .setFooter(client.language.INFO)
            .setTimestamp(new Date())
            .setDescription(`${client.emotes.success} - Support Server: https://discord.gg/FCJY3W5nBS`)
		let embed6 = new MessageEmbed()
			.setColor(`#ff0000`)
            .setAuthor('Help pannel')
			.addFields({ name: '**Bot Owner**', value: botowner })
            .setFooter(client.language.INFO)
            .setTimestamp(new Date())
            .setDescription(`${client.emotes.success} - Support Server: https://discord.gg/FCJY3W5nBS`)
        let embed7 = new MessageEmbed()
			.setColor(`#ff0000`)
            .setAuthor('Help pannel')
			.addFields({ name: '**NSFW**', value: nsfw })
            .setFooter(client.language.INFO)
            .setTimestamp(new Date())
            .setDescription(`${client.emotes.success} - Support Server: https://discord.gg/FCJY3W5nBS`)
			
        return message.channel.createSlider(message.author.id, [embed0, embed1, embed2, embed4, embed5, embed6, embed7], "➡", "⬅")
    }
	
};