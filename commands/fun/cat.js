const superagent = require("snekfetch");
const Discord = require('discord.js')
const db = require("quick.db");

module.exports = {
    name: 'cat',
    aliases: [],
    category: 'Fun',
    utilisation: '{prefix}cat',
execute(client, message, args, level) {
//command
superagent.get('https://nekos.life/api/v2/img/meow')
    .end((err, response) => {
  const lewdembed = new Discord.MessageEmbed()
  .setTitle(client.language.Cat)
  .setImage(response.body.url)
  .setColor(`#ff0000`)
  .setFooter(`owo`)
  .setURL(response.body.url);
    
	message.channel.send(lewdembed);
    
})
}
};