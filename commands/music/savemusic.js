module.exports = {
    name: 'savemusic',
    aliases: ['svm'],
    category: 'Music',
    utilisation: '{prefix}save',
    voiceChannel: true,

    async execute(client, message) {
        const queue = client.player.getQueue(message);

        if (!queue || !queue.playing) return message.channel.send(`No music currently playing ${message.author}... try again ? ❌`);

        message.author.send(`You saved the track ${client.player.getQueue(message).playing.title} | from the server ${message.guild.name} ✅`).then(() => {
            message.channel.send(`I have sent you the title of the music by private messages ✅`);
        }).catch(error => {
            message.channel.send(`Unable to send you a private message ${message.author}... try again ? ❌`);
        });
    },
};