const { MessageEmbed } = require("discord.js");
const db = require("quick.db");


module.exports = {
    name: 'buy-padlock',
    aliases: [],
    category: 'Economy',
    utilisation: '{prefix}buy-padlock',
    execute(bot, message, args) {
        
        let user = message.author;
        
        let moneydb = db.fetch(`money_${message.guild.id}_${user.id}`)
        
        let author2 = db.fetch(`money_${message.guild.id}_${user.id}`);
        
    	let money = 500;

        let amount = 1;
        
        let moneymore = new MessageEmbed()
    		.setColor("#ff0000")
    		.setDescription(`❌ you don't have enough money to buy this`);
        
        let moneyEmbed = new MessageEmbed()
  			.setColor("#ff0000")
			.setDescription(`❌ you don't have enough money to buy this`);
        
        if (money > moneydb) return message.channel.send(moneymore);

 		 if (author2 < 500) {
   		return message.channel.send(moneyEmbed)
 		}
            
            let moneyEmbed2 = new MessageEmbed()
                .setColor("#ff0000")
                .setDescription(`✅ you have buy padlock`);
            message.channel.send(moneyEmbed2)
            db.add(`padlock_${message.guild.id}_${user.id}`, amount)
       		db.subtract(`money_${message.guild.id}_${user.id}`, money)


        }
    };