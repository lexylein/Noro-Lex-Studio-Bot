const { MessageEmbed } = require("discord.js");
const db = require("quick.db");


module.exports = {
    name: 'buy-laptop',
    aliases: [],
    category: 'Economy',
    utilisation: '{prefix}buy-laptop',
    execute(bot, message, args) {
        
        let user = message.author;
        
        let moneydb = db.fetch(`money_${message.guild.id}_${user.id}`)
        
        let author2 = db.fetch(`money_${message.guild.id}_${user.id}`);
        
        let author3 = db.fetch(`laptop_${message.guild.id}_${user.id}`);
        
    	let money = 80000;

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

 		 if (author2 < 80000) {
   		return message.channel.send(moneyEmbed)
 		}
        
        if (author3 > 0) {
   		return message.channel.send(moneyEmbed3)
 		}
            
            let moneyEmbed2 = new MessageEmbed()
                .setColor("#ff0000")
                .setDescription(`✅ you have buy laptop`);
            message.channel.send(moneyEmbed2)
            db.add(`laptop_${message.guild.id}_${user.id}`, amount)
       		db.subtract(`money_${message.guild.id}_${user.id}`, money)


        }
    };