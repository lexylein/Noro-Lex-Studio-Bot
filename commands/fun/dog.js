const superagent = require("snekfetch");
const Discord = require('discord.js')

module.exports = {
    name: 'dog',
    aliases: [],
    category: 'fun',
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
message.channel.send(lewdembed);
})
}
};