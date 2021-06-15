module.exports = {
    name: 'slap',
    aliases: [],
    category: 'Fun',
    utilisation: '{prefix}slap [user]',    	

    execute(client, message) {

if (!message.mentions.users.first()) return message.reply("You need to mention someone to slap a user"); 
    if(message.mentions.users.first().id === message.author.id) return message.reply('you cannot slap yourself'); 
  
    message.channel.send(`${message.mentions.users.first().username} you have been slaped by ${message.author.username}`)
    message.channel.send('https://tenor.com/view/asobi-asobase-anime-slap-olivia-hanako-honda-gif-15753584')
    }
};
