const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'queue',
    aliases: ['q'],
    category: 'Music',
    utilisation: '{prefix}queue',
    voiceChannel: true,

    execute(client, message) {
        const queue = client.player.getQueue(message);

        if (!queue) return message.channel.send(`No music currently playing ${message.author}... try again ? ❌`);

        if (!queue.tracks[0]) return message.channel.send(`No music in the queue after the current one ${message.author}... try again ? ❌`);

        const methods = ['', '🔁', '🔂']
        
        const embed = new MessageEmbed()
        .setColor('#ff0000')
        .setThumbnail(message.guild.iconURL({ size: 2048, dynamic: true }))
        .setAuthor(`Server queue - ${message.guild.name}`, client.user.displayAvatarURL({ size: 1024, dynamic: true }))

        const tracks = queue.tracks.map((track, i) => `**${i + 1}** - ${track.title} | ${track.author} (requested by: ${track.requestedBy.username})`);

        const songs = queue.tracks.length;
        const nextSongs = songs > 5 ? `And **${songs - 5}** other song(s)...` : `In the playlist **${songs}** song(s)...`;

        embed.setDescription(`Current playing: ${client.player.getQueue(message).playing.title}\n\n${tracks.slice(0, 5).join('\n')}\n\n${nextSongs}`);

        embed.setTimestamp();
        embed.setFooter('This bot made by Noro Lex Studio (Noro Lex Studio Bot)', message.author.avatarURL({ dynamic: true }));

        message.channel.send(embed);
    },
};