const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'primehelp',
    aliases: ['ph'],
    category: 'Core',
    utilisation: '{prefix}primehelp',
    execute(client, message, args) {
    
    
    
if (!args[0]) {
            const prime = ('joke');

            message.channel.send({
                embed: {
                    color: '#ff0000',
                    author: { name: 'PrimeHelp pannel' },
                    footer: { text: 'This bot made by Noro Lex Studio (Noro Lex Studio Bot)' },
                    fields: [
                      { name: '**Prime**', value: prime },
                    ],
                    timestamp: new Date(),
                    description: `${client.emotes.success} - Support Server: https://discord.gg/GqT6fUt6z9`,
                },
            });
        }
}
};
