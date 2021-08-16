const jokes = [
  'https://media.giphy.com/media/RfTzb8ZnUcLUQ/giphy.gif',
  'https://media.giphy.com/media/mbQUPTaciTyiQ/giphy.gif',
  'https://media.giphy.com/media/h4BprYiFYNxRe/giphy.gif',
  'https://media.giphy.com/media/131Q2gKssUNCwM/giphy.gif',
  'https://media.giphy.com/media/mx2EIGDZX5XH2/giphy.gif',
  'https://media.giphy.com/media/3oEhnaf39dUjrk2Ag0/giphy.gif',
  'https://media.giphy.com/media/Ofn9BoD0aEOBy/giphy.gif',
  'https://media.giphy.com/media/vFCLfTAIRj729v7oe0/giphy.gif',
  'https://media.giphy.com/media/nTeeb8thSiS0U/giphy.gif',
  'https://media.giphy.com/media/bw1zKcUa8Dkje/giphy.gif',
  'https://media.giphy.com/media/BJsT6kCPhkJvwZQmwt/giphy.gif',
  'https://media.giphy.com/media/g6dNCXVodhbbnzsAUZ/giphy.gif',
  'https://media.giphy.com/media/l4CD8p6RyHKT7TSX6/giphy.gif',
  'https://media.giphy.com/media/3o7bubn8PhAIktySkg/giphy.gif',
  'https://media.giphy.com/media/2ZmslpOgwHk9epmvNt/giphy.gif',
  'https://media.giphy.com/media/xUOxf6vXkTPw8gfRFS/giphy.gif',
  'https://media.giphy.com/media/wIIFNBy01kGX8ePzYE/giphy.gif',
  'https://media.giphy.com/media/5zqgmALNzK8vXmi9IK/giphy.gif',
  'https://media.giphy.com/media/vwGcmkbP2wQJv0GuFc/giphy.gif',
  'https://media.giphy.com/media/nAMJRBXAxdcRDm8tJ5/giphy.gif',
];

module.exports = {
    name: 'cuddle',
    aliases: [],
    category: 'Fun',
    utilisation: '{prefix}cuddle [user]',    	

    execute(client, message) {
    	
    	if (!message.mentions.users.first()) return message.reply("You need to mention someone to kiss a user"); 
    	
    	if (message.mentions.users.first().id === message.author.id) return message.reply('wait , why you want to cuddle yourself?');
    	
message.channel.send(`OwO, ${message.author.username} has cuddle ${message.mentions.users.first().username}`)
message.channel.send(jokes[Math.floor(Math.random() * jokes.length)]);
		}
};