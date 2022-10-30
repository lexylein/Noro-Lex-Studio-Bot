const { Client, GatewayIntentBits, Partials } = require('discord.js');
const { Player } = require('discord-player-music');

module.exports = {
    name: 'play',
    aliases: ['p'],
    category: 'Music',
    utilisation: '{prefix}play [name/URL]',

    execute(client, message, args) {

        let queue = client.player.createQueue(message.guild.id);

        queue.connect(message.member.voice.channel);

        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You're not in a voice channel !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You are not in the same voice channel !`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - Please indicate the title of a song !`);

        queue.play(message, args.join(" "), { firstResult: true });

    },
};