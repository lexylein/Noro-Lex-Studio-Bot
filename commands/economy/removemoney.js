const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
    name: 'removemoney',
    aliases: ['remmoney'],
    category: 'Economy',
    utilisation: '{prefix}removemoney [user]',
execute(client, message, args) {
    
    if (!message.member.hasPermission("ADMINISTRATOR")) {
                    return message.reply(
                        "You do not have the permission to use that command."
                    );
                }
    
    let user = message.mentions.members.first();
    if (!user) return message.channel.send("**Enter A Valid User!**");

    if (isNaN(args[1])) return;
    db.subtract(`money_${message.guild.id}_${user.id}`, args[1])
    let bal = db.fetch(`money_${message.guild.id}_${user.id}`)

  message.channel.send(`Taken \`${args[1]}\` credits from **${user}**'s balance.\n> Current balance: \`${bal}\` credits.`)

}};
