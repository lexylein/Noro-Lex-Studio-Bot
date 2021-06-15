const superagent = require("snekfetch");
const Discord = require('discord.js')

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
    
    if(message.guild.id === "prime 1 server id") return message.channel.send(lewdembed);
		
	if(message.guild.id === "prime 2 server id") return message.channel.send(lewdembed);
		
	if(message.guild.id === "prime 3 server id") return message.channel.send(lewdembed);
       
    if(message.guild.id === "prime 3 server id") return message.channel.send(lewdembed);


        
   message.channel.send('the server has no prime from the bot');
    
})
}
};
