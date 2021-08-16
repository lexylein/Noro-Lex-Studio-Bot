const { MessageEmbed } = require("discord.js");
const db = require("quick.db");


module.exports = {
    name: 'buy-multiplyerx2',
    aliases: [],
    category: 'Economy',
    utilisation: '{prefix}buy-multiplyerx2',
    execute(bot, message, args) {
        
        let user = message.author;
        
        let moneydb = db.fetch(`money_${message.guild.id}_${user.id}`)
        
        let author2 = db.fetch(`money_${message.guild.id}_${user.id}`);
        
        let author3 = db.fetch(`multiplyerx2_${message.guild.id}_${user.id}`);
        
    	let money = 5000;

        let amount = 1;
        
        let moneymore = new MessageEmbed()
    		.setColor("#ff0000")
    		.setDescription(`❌ you don't have enough money to buy this`);
        
        let moneyEmbed = new MessageEmbed()
  			.setColor("#ff0000")
			.setDescription(`❌ you don't have enough money to buy this`);
        
        let moneyEmbed3 = new MessageEmbed()
  			.setColor("#ff0000")
			.setDescription(`❌ you've already bought this`);
        
        if (money > moneydb) return message.channel.send(moneymore);

 		 if (author2 < 5000) {
   		return message.channel.send(moneyEmbed)
 		}
        
        if (author3 > 0) {
   		return message.channel.send(moneyEmbed3)
 		}
            
            let moneyEmbed2 = new MessageEmbed()
                .setColor("#ff0000")
                .setDescription(`✅ you have buy multiplyer x2`);
            message.channel.send(moneyEmbed2)
            db.add(`multiplyerx2_${message.guild.id}_${user.id}`, amount)
       		db.subtract(`money_${message.guild.id}_${user.id}`, money)


        }
    };