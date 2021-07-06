const { MessageEmbed } = require("discord.js");
const db = require("quick.db");


module.exports = {
    name: 'daily',
    aliases: [],
    category: 'Economy',
    utilisation: '{prefix}daily',
    execute(bot, message, args) {
    
    		let user = message.author;

        let timeout = 86400000;
        let amount = 200;

        let daily = db.fetch(`daily_${message.guild.id}_${user.id}`);

        if (daily !== null && timeout - (Date.now() - daily) > 0) {
            

            let timeEmbed = new MessageEmbed()
                .setColor("#ff0000")
                .setDescription(`❌ You've already collected your daily reward`)
            message.channel.send(timeEmbed)
        } else {
            let moneyEmbed = new MessageEmbed()
                .setColor("#ff0000")
                .setDescription(`✅ You've collected your daily reward of ${amount} coins`);
            message.channel.send(moneyEmbed)
            db.add(`money_${message.guild.id}_${user.id}`, amount)
            db.set(`daily_${message.guild.id}_${user.id}`, Date.now())


        }
    }
};
