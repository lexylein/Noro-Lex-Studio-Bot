const Discord = require("discord.js");
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
  let author2 = db.fetch(`money_${message.guild.id}_${message.author.id}`);

  let timeout = 86400000;
    
  let random = 200;

if (author !== null && timeout - (Date.now() - author) > 0) {

    let timeEmbed = new Discord.MessageEmbed()
    .setColor("#ff0000")
    .setDescription(`<a:false:737764891657633814> You have already robbed`);
    message.channel.send(timeEmbed)

  } else {

    let moneyEmbed = new Discord.MessageEmbed()
  .setColor("#ff0000")
  .setDescription(`<a:false:737764891657633814> You need at least 200 coins in your wallet to rob someone`);


  if (author2 < 200) {
    return message.channel.send(moneyEmbed)
  }

  let moneyEmbed2 = new Discord.MessageEmbed()
  .setColor("#ff0000")
  .setDescription(`<a:false:737764891657633814> ${user.username} does not have anything you can rob`);

  if (targetuser <= 0 || targetuser === null) {
    return message.channel.send(moneyEmbed2)
  }

  let authorembed = new Discord.MessageEmbed()
  .setColor("#ff0000")
  .setDescription(`<a:false:737764891657633814> You cannot rob yourself!`);

  if(user.id === message.author.id) {
    return message.channel.send(authorembed)
  }


  let embed = new Discord.MessageEmbed()
   .setDescription(`<a:yes:739569362440159252> You robbed ${user} and got away with ${random} coins`)
   .setColor("#ff0000")

   message.channel.send(embed)

db.subtract(`money_${message.guild.id}_${message.mentions.members.first().id}`, random);
db.add(`money_${message.guild.id}_${message.author.id}`, random);
db.set(`rob_${message.guild.id}_${message.author.id}`, Date.now());
  
		}
	}
};
