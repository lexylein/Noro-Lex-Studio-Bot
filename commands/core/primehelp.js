const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'primehelp',
    aliases: ['ph'],
    category: 'Core',
    utilisation: '{prefix}primehelp',
    execute(client, message, args) {
    
    let primeEmbed = new MessageEmbed()
        .setColor('#ff0000')
        .setTitle("PrimeHelp")
        .addField(`**Prime**`, `\`joke\``)
    
    message.channel.send(primeEmbed)
}
};
