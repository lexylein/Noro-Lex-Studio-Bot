const { MessageEmbed } = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: 'shop',
    aliases: [],
    category: 'Economy',
    utilisation: '{prefix}shop',
   execute(bot, message, args) {
        let prefix;
        let fetched = db.fetch(`prefix_${message.guild.id}`);
let g = [1 , 2, 3, 4, null]
        if (fetched === null) {
            
 

     let embed = new MessageEmbed()
            .setDescription(`** SHOP: **\n PadLock: \`500$\`\n you can use padlock to keep your wallet safe [ !n buy/ !n sell PadLock]\n\n LapTop: \`800$\`
 you can use laptop to earn some money online 💰
[ !n buy/ !n sell Laptop] \n\nFishing Rod: \`1600$\` 
 you can buy some fish and earn some money. 
[ !n buy/ !n sell Fishing Rod]\n\nHunting Rifle: \`2000$\`
 with hunting rifle you can catch some animal and earn money . [ !n buy/ !n sell Hunting Rifle]\n\nBank Note: \`2600$\`
 you can increase storage of your bank to 100 to 5000. [ !n buy/ !nsell Bank Note]
 `)
            .setColor("BLUE")
        .setFooter(`Requested By ${message.author.username}`)
        message.channel.send(embed)
      if(args[0] === "2"){
        
        }
    }
}};
