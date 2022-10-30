const superagent = require("snekfetch");
const Discord = require('discord.js')
const db = require("quick.db");

module.exports = {
    name: 'dog',
    aliases: [],
    category: 'Fun',
    utilisation: '{prefix}dog',
execute(client, message, args) {
//command
superagent.get('https://nekos.life/api/v2/img/woof')
    .end((err, response) => {
  const lewdembed = new Discord.MessageEmbed()
  .setTitle(client.language.Dog)
  .setImage(response.body.url)
  .setColor(`#ff0000`)
  .setFooter(client.language.Dog)
  .setURL(response.body.url);
    
	message.channel.send(lewdembed);

    
})
}
};