const superagent = require("snekfetch");
const Discord = require('discord.js')
const db = require("quick.db");

module.exports = {
    name: 'cat',
    aliases: [],
    category: 'Prime',
    utilisation: '{prefix}cat',
execute(client, message, args, level) {
//command
superagent.get('https://nekos.life/api/v2/img/meow')
    .end((err, response) => {
  const lewdembed = new Discord.MessageEmbed()
  .setTitle("Random cat")
  .setImage(response.body.url)
  .setColor(`#ff0000`)
  .setFooter(`owo`)
  .setURL(response.body.url);
    
        let moneydb = db.fetch(`prime_${message.guild.id}`)
        
    	let money = 0
        
        if (money < moneydb) return message.channel.send(lewdembed);


        
   message.channel.send('the server has no prime from the bot');
    
})
}
};