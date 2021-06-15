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

    
     if(message.guild.id === "prime 1 server id") return message.channel.send(lewdembed);
		
	if(message.guild.id === "prime 2 server id") return message.channel.send(lewdembed);
		
	if(message.guild.id === "prime 3 server id") return message.channel.send(lewdembed);
       
    if(message.guild.id === "prime 4 server id") return message.channel.send(lewdembed);


        
   message.channel.send('the server has no prime from the bot');
    
})
}
};
