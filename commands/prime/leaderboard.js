const { MessageEmbed } = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: 'leaderboard',
    aliases: ['lb'],
    category: 'Prime',
    utilisation: '{prefix}leaderboard',
        
    execute(bot, message, args) {
    	
    	if(!message.guild.id === "784348476220768280") return message.channel.send('the server has no prime from the bot');
    	  
    	  if(!message.guild.id === "836299465051996212") return message.channel.send('the server has no prime from the bot');
    	  
    	  if(!message.guild.id === "770040861261430794") return message.channel.send('the server has no prime from the bot');
    	
        let money = db.all().filter(data => data.ID.startsWith(`money_`)).sort((a, b) => b.data - a.data);
        if (!money.length) {
            let noEmbed = new MessageEmbed()
                .setAuthor(message.member.displayName, message.author.displayAvatarURL())
                .setColor("GREEN")
                .setFooter("Nothing To See Here Yet!")
            return message.channel.send(noEmbed)
        };

        money.length = 10;
        var finalLb = "";
        for (var i in money) {
            if (money[i].data === null) money[i].data = 0
            finalLb += `**${money.indexOf(money[i]) + 1}. ${bot.users.cache.get(money[i].ID.split('_')[1]) ? bot.users.cache.get(money[i].ID.split('_')[1]).tag : "Unknown User#0000"}** - ${money[i].data} :dollar:\n`;
        };

        const embed = new MessageEmbed()
            .setTitle(`Leaderboard Of ${message.guild.name}`)
            .setColor("GREEN")
            .setDescription(finalLb)
            .setFooter(bot.user.tag, bot.user.displayAvatarURL())
            .setTimestamp()
        message.channel.send(embed);
    }
};
