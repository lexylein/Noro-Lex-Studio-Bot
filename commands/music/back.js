module.exports = {
    name: 'back',
    aliases: ['previous'],
    category: 'Music',
    utilisation: '{prefix}back',
    voiceChannel: true,

    async execute(client, message) {
        const queue = client.player.getQueue(message);

        if (!queue || !queue.playing) return message.channel.send(`No music currently playing ${message.author}... try again ? ❌`);

        if (!queue.previousTracks[1]) return message.channel.send(`There was no music played before ${message.author}... try again ? ❌`);

        const success = client.player.skip(message);
        
        if (success) message.channel.send(`${client.emotes.success} - Playing the **previous** track!`);
    },
};