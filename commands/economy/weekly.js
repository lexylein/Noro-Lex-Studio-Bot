const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
        
module.exports = {
    name: 'weekly',
    aliases: ['week'],
    category: 'Economy',
    utilisation: '{prefix}weekly',
    execute(bot, message, args) {

        let user = message.author;
        let timeout = 604800000;
        let amount = 2000;

        let weekly = db.fetch(`weekly_${message.guild.id}_${user.id}`);
        
        let author5 = db.fetch(`multiplyerx2_${message.guild.id}_${user.id}`);
    
  		let moneymuliplyerx2 = 4000;
    
  		let embed3 = new MessageEmbed()
   			.setDescription(`✅ You've collected your weekly reward of ${moneymuliplyerx2}$`)
   			.setColor("#ff0000")

        if (weekly !== null && timeout - (Date.now() - weekly) > 0) {

            let timeEmbed = new MessageEmbed()
                .setColor("#ff0000")
                .setDescription(`❌ You have already collected your weekly reward\n\n`);
            message.channel.send(timeEmbed)
        } else {
            
            if (author5 > 0) {
                db.add(`money_${message.guild.id}_${message.author.id}`, moneymuliplyerx2);
                db.set(`weekly_${message.guild.id}_${user.id}`, Date.now())
        		return message.channel.send(embed3)
 		}
            
            let moneyEmbed = new MessageEmbed()
                .setColor("#ff0000")
                .setDescription(`✅ You've collected your weekly reward of ${amount}$`);
            message.channel.send(moneyEmbed)
            db.add(`money_${message.guild.id}_${user.id}`, amount)
            db.set(`weekly_${message.guild.id}_${user.id}`, Date.now())


        }
    }
};