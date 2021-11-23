const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
    name: 'inventory',
    aliases: ['inv'],
    category: 'Economy',
    utilisation: '{prefix}inventory <user>',
  execute(bot, message, args) {
    let user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.guild.members.cache.find(
        r =>
          r.user.username.toLowerCase() === args.join(" ").toLocaleLowerCase()
      ) ||
      message.guild.members.cache.find(
        r => r.displayName.toLowerCase() === args.join(" ").toLocaleLowerCase()
      ) ||
      message.member;

    let bal = db.fetch(`padlock_${message.guild.id}_${user.id}`);

    if (bal === null) bal = 0;

    let bank = db.fetch(`laptop_${message.guild.id}_${user.id}`);

    if (bank === null) bank = 0;
      
    let camera = db.fetch(`camera_${message.guild.id}_${user.id}`);

    if (camera === null) camera = 0;
      
    let multiplyerx2 = db.fetch(`multiplyerx2_${message.guild.id}_${user.id}`);

    if (multiplyerx2 === null) multiplyerx2 = 0;
      
let Total = bal + bank + camera + multiplyerx2
    if (user) {
      let moneyEmbed = new MessageEmbed()
        .setColor("#ff0000")
        .setDescription(
          `**${user.user.username}'s Inventory**\n**Padlock:** ${bal}\n**Laptop:** ${bank}\n**Camera:** ${camera}\n**multiplyer x2:** ${multiplyerx2}\n**items:** ${Total}`
        );
      message.channel.send(moneyEmbed);
    } else {
      return message.channel.send("**Enter A Valid User!**");
    }
  }
};