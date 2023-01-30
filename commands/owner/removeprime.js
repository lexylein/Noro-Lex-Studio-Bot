const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
    name: 'removeprime',
    aliases: ['removep'],
    category: 'Owner',
    utilisation: '{prefix}removeprime',
execute(client, message, args) {
    
    if(!message.author.id === "612589827262644234") return message.channel.send(client.language.No_Owner);

    db.set(`prime_${message.guild.id}`, 0)
    message.channel.send(`Server wurde als Prime Server Entfernt`)

}};