module.exports = {
    name: 'debug',
    aliases: [],
    category: 'Owner',
    utilisation: '{prefix}debug',

    execute(client, message) {
      
      if(message.author.id === "Owner ID") return message.channel.send(`${client.emotes.success} - ${client.user.username} connected in **${client.voice.connections.size}** channels from **${client.guilds.cache.size}** servers`);
      
      message.channel.send('you are not a Owner from the Bot')
    
    },
};
