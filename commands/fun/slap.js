const jokes = [
  'https://tenor.com/view/asobi-asobase-anime-slap-olivia-hanako-honda-gif-15753584',
  'https://media.giphy.com/media/u8maN0dMhVWPS/giphy.gif',
  'https://media.giphy.com/media/RrLbvyvatbi36/giphy.gif',
  'https://media.giphy.com/media/gSIz6gGLhguOY/giphy.gif',
  'https://media.giphy.com/media/uG3lKkAuh53wc/giphy.gif',
  'https://media.giphy.com/media/xT8qB7Sbwskk27Rdy8/giphy.gif',
  'https://media.giphy.com/media/uqSU9IEYEKAbS/giphy.gif',
  'https://media.giphy.com/media/vi2ciYHi5u0FO/giphy.gif',
  'https://media.giphy.com/media/4maPzsZTtsMsE/giphy.gif',
  'https://media.giphy.com/media/yUWGLXWLPMd44/giphy.gif',
  'https://media.giphy.com/media/Qs0I2VdbIqNkk/giphy.gif',
  'https://media.giphy.com/media/jt38YxwGTevEkFWWoY/giphy.gif',
  'https://media.giphy.com/media/tV0HkQju9zHR6/giphy.gif',
  'https://media.giphy.com/media/Y6c59hTH3TJoA/giphy.gif',
  'https://media.giphy.com/media/RXGNsyRb1hDJm/giphy.gif',
  'https://media.giphy.com/media/l2YOqzhYD066fAd56/giphy.gif',
  'https://media.giphy.com/media/2UaMgzfRw5EZy/giphy.gif',
  'https://media.giphy.com/media/zvDT09xBhcuMo/giphy.gif',
  'https://media.giphy.com/media/3oEdv1Rdmo0Vd0YdW0/giphy.gif',
  'https://media.giphy.com/media/MqWwyj9LMLqG4/giphy.gif',
];

module.exports = {
    name: 'slap',
    aliases: [],
    category: 'Fun',
    utilisation: '{prefix}slap [user]',    	

    execute(client, message) {

if (!message.mentions.users.first()) return message.reply("You need to mention someone to slap a user"); 
    if(message.mentions.users.first().id === message.author.id) return message.reply('you cannot slap yourself'); 
  
    message.channel.send(`${message.mentions.users.first().username} you have been slaped by ${message.author.username}`)
    message.channel.send(jokes[Math.floor(Math.random() * jokes.length)]);
    }
};