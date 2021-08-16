const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
    name: 'addmoney',
    aliases: ['addm'],
    category: 'Economy',
    utilisation: '{prefix}addmoney [user]',
execute(client, message, args) {

    if (!message.member.hasPermission("ADMINISTRATOR")) {
                    return message.reply(
                        "You do not have the permission to use that command."
                    );
                }
    
    let user = message.mentions.members.first();
    if (!user) return message.channel.send("**Enter A Valid User!**");

    if (isNaN(args[1])) return;
    db.add(`money_${message.guild.id}_${user.id}`, args[1])
    let bal = db.fetch(`money_${message.guild.id}_${user.id}`)
    message.channel.send(`add \`${args[1]} $\` to **${user}**'s balance.\n> Current balance: \`${bal} $\`.`)

}};