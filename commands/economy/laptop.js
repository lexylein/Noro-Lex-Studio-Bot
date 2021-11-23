const { MessageEmbed } = require("discord.js");
const db = require("quick.db");


module.exports = {
    name: 'laptop',
    aliases: [],
    category: 'Economy',
    utilisation: '{prefix}laptop',
    execute(bot, message, args) {
    
    	let user = message.author;
        
        let author3 = db.fetch(`laptop_${message.guild.id}_${user.id}`);

        let timeout = 7200000;
        let amount = 10;
        
        let moneyEmbed3 = new MessageEmbed()
  			.setColor("#ff0000")
			.setDescription(`❌ you don't have a laptop`);
        
        let author5 = db.fetch(`multiplyerx2_${message.guild.id}_${user.id}`);
    
  		let moneymuliplyerx2 = 20;
    
  		let embed3 = new MessageEmbed()
   			.setDescription(`✅ You've collected your laptop reward of ${moneymuliplyerx2}$`)
   			.setColor("#ff0000")
        
        let embedfail = new MessageEmbed()
   			.setDescription(`❌ you don't have a laptop`)
   			.setColor("#ff0000")
        
        if (author3 < 1) {
            return message.channel.send(embedfail)
        }

        let laptop = db.fetch(`laptop_${message.guild.id}_${user.id}`);
        
        let laptop2 = db.fetch(`laptop2_${message.guild.id}_${user.id}`);

        if (author3 > 0) {
            if (laptop2 !== null && timeout - (Date.now() - laptop2) > 0) {
            

            let timeEmbed = new MessageEmbed()
                .setColor("#ff0000")
                .setDescription(`❌ You've already collected your laptop reward`)
            message.channel.send(timeEmbed)
        } else {
            
            if (author5 > 0) {
                db.add(`money_${message.guild.id}_${message.author.id}`, moneymuliplyerx2);
                db.set(`laptop2_${message.guild.id}_${user.id}`, Date.now())
        		return message.channel.send(embed3)
 			}
            
            let moneyEmbed = new MessageEmbed()
               	.setColor("#ff0000")
                .setDescription(`✅ You've collected your laptop reward of ${amount}$`);
           	message.channel.send(moneyEmbed)
            db.add(`money_${message.guild.id}_${user.id}`, amount)
            db.set(`laptop2_${message.guild.id}_${user.id}`, Date.now())


        	}
        
    	}
    }
};