const superagent = require("snekfetch");
const Discord = require('discord.js')
const db = require("quick.db");

module.exports = {
    name: 'dog',
    aliases: [],
    category: 'Prime',
    utilisation: '{prefix}dog',
execute(client, message, args) {
//command
superagent.get('https://nekos.life/api/v2/img/woof')
    .end((err, response) => {
  const lewdembed = new Discord.MessageEmbed()
  .setTitle("<a:dog1:730389376210829344>")
  .setImage(response.body.url)
  .setColor(`#ff0000`)
  .setFooter(`🤣WHAT A DOG🤣`)
  .setURL(response.body.url);
    
        let moneydb = db.fetch(`prime_${message.guild.id}`)
        
    	let money = 0
        
        if (money < moneydb) return message.channel.send(lewdembed);


        
   message.channel.send('the server has no prime from the bot');
    
})
}
};