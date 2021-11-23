const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
    name: 'setmoney',
    aliases: ['setm'],
    category: 'Economy',
    utilisation: '{prefix}setmoney [user]',
execute(client, message, args) {

    if (!message.member.hasPermission("ADMINISTRATOR")) {
                    return message.reply(
                        "You do not have the permission to use that command."
                    );
                }
    
    let user = message.mentions.members.first();
    if (!user) return message.channel.send("**Enter A Valid User!**");

    if (isNaN(args[1])) return;
    db.set(`money_${message.guild.id}_${user.id}`, args[1])
    let bal = db.fetch(`money_${message.guild.id}_${user.id}`)
    message.channel.send(`**${user}**'s balance Set to \`${args[1]}$\`.\n> Current balance: \`${bal}$\`.`)

}};