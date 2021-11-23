const { MessageEmbed } = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: 'shop',
    aliases: [],
    category: 'Economy',
    utilisation: '{prefix}shop',
    execute(bot, message, args) {
        
        if(!message.guild.channels.cache.find(channel => channel.name === `bot-log`)) {
            return message.reply('have not setup the server use ```!n setup```');
        }
        
        let prefix;
        let fetched = db.fetch(`prefix_${message.guild.id}`);
let g = [1 , 2, 3, 4, null]
        if (fetched === null) {
            
 

     let embed = new MessageEmbed()
            .setDescription(`** SHOP: **\n PadLock: \`500$\`\n you can use padlock to keep your wallet safe but the padlock breaks as soon as someone has tried to steal from you [!n buy-PadLock]\n\n LapTop: \`80000$\`
 You can earn money online every 2 hours with the laptop 💰[!n buy-Laptop]\n\n camera: \`100$\`
 with the camera the bot writes you who has stolen you but the camera goes kaput [!n buy-camera]\n\n multiplyer x2: \`5000$\`
 this item multiplies your income x2 [!n buy-multiplyerx2]`)
            .setColor("#ff0000")
            .setFooter(`Requested By ${message.author.username}`)
        message.channel.send(embed)
      if(args[0] === "2"){
        
        }
    }
}};