const superagent = require("snekfetch");
const Discord = require('discord.js')

module.exports = {
    name: 'cat',
    aliases: [],
    category: 'fun',
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
message.channel.send(lewdembed);
})
}
};
