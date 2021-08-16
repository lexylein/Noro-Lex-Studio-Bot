const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const db = require("quick.db");


module.exports = {
    name: 'rob',
    aliases: [],
    category: 'Economy',
    utilisation: '{prefix}rob [user]',
execute(client, message, args) {  

  let user = message.mentions.members.first();
  if (!user) return message.channel.send("**Enter A Valid User!**");

  let targetuser = db.fetch(`money_${message.guild.id}_${user.id}`);
    
  let author = db.fetch(`rob_${message.guild.id}_${message.author.id}`);
    
  let author2 = db.fetch(`money_${message.guild.id}_${user.id}`);
    
  let author3 = db.fetch(`padlock_${message.guild.id}_${user.id}`);
    
  let author4 = db.fetch(`camera_${message.guild.id}_${user.id}`);
    
  let author5 = db.fetch(`multiplyerx2_${message.guild.id}_${message.author.id}`);
    
  let moneymuliplyerx2 = 400;
    
  let embed3 = new Discord.MessageEmbed()
   	.setDescription(`❌ You robbed ${user} and got away with ${moneymuliplyerx2} coins`)
   	.setColor("#ff0000")
  	db.subtract(`money_${message.guild.id}_${message.mentions.members.first().id}`, moneymuliplyerx2);
	db.add(`money_${message.guild.id}_${message.author.id}`, moneymuliplyerx2);
	db.set(`rob_${message.guild.id}_${message.author.id}`, Date.now());
    
  let padlockkey = 1;
    
  let camera = 1;

  let timeout = 86400000;
    
  let random = 200;
    
  let embed2 = new Discord.MessageEmbed()
   	.setDescription(`❌ You robbed ${user} and got away with ${random} coins`)
   	.setColor("#ff0000")
  	db.subtract(`money_${message.guild.id}_${message.mentions.members.first()}`, random);
	db.add(`money_${message.guild.id}_${message.author.id}`, random);
	db.set(`rob_${message.guild.id}_${message.author.id}`, Date.now());
    
    let moneyEmbed3 = new MessageEmbed()
  			.setColor("#ff0000")
			.setDescription(`❌ the user have padlock`);
    
if (author !== null && timeout - (Date.now() - author) > 0) {

    let timeEmbed = new Discord.MessageEmbed()
    .setColor("#ff0000")
    .setDescription(`❌ You have already robbed`);
    message.channel.send(timeEmbed)

  } else {
      
      if (author3 > 0) {
   		return message.channel.send(moneyEmbed3)
 		}
      
    if (author2 < 400) {
    	if (author5 > 0) {
           	if (author4 > 0) {
       			db.subtract(`camera_${message.guild.id}_${user.id}`, camera)
        		message.mentions.members.first().send(`you were robbed by user id: ${message.author.id}`)
        		return message.channel.send(embed3)
 			}
 		}
    }
    
    if (author2 < 400) {
    	if (author5 > 0) {
            return message.channel.send(embed3)
        }
    }
      
    if (author4 > 0) {
       	db.subtract(`camera_${message.guild.id}_${user.id}`, camera)
        message.mentions.members.first().send(`you were robbed by user id: ${message.author.id}`)
        return message.channel.send(embed2)
 		}

    let moneyEmbed = new Discord.MessageEmbed()
  .setColor("#ff0000")
  .setDescription(`❌ You need at least 200 coins in your wallet to rob someone`);


  if (author2 < 200) {
    return message.channel.send(moneyEmbed)
  }

  let moneyEmbed2 = new Discord.MessageEmbed()
  .setColor("#ff0000")
  .setDescription(`✅ ${user.username} does not have anything you can rob`);

  if (targetuser <= 0 || targetuser === null) {
    return message.channel.send(moneyEmbed2)
  }

  let authorembed = new Discord.MessageEmbed()
  .setColor("#ff0000")
  .setDescription(`❌ You cannot rob yourself!`);

  if(user.id === message.author.id) {
    return message.channel.send(authorembed)
  }
      
  let embed = new Discord.MessageEmbed()
   	.setDescription(`❌ You robbed ${user} and got away with ${random} coins`)
   	.setColor("#ff0000")
  	db.subtract(`money_${message.guild.id}_${message.mentions.members.first().id}`, random);
	db.add(`money_${message.guild.id}_${message.author.id}`, random);
	db.set(`rob_${message.guild.id}_${message.author.id}`, Date.now());

   message.channel.send(embed)
  
		}
	}
};