const superagent = require("snekfetch");
const Discord = require('discord.js')

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

    
     if(message.guild.id === "784348476220768280") return message.channel.send(lewdembed);
		
	if(message.guild.id === "836299465051996212") return message.channel.send(lewdembed);
		
	if(message.guild.id === "770040861261430794") return message.channel.send(lewdembed);
       
    if(message.guild.id === "769163085113327638") return message.channel.send(lewdembed);


        
   message.channel.send('the server has no prime from the bot');
    
})
}
};
