const jokes = [
  'https://media.giphy.com/media/TfEtuvZ4sviFlgjdVT/giphy.gif',
  'https://media.giphy.com/media/l2Je2M4Nfrit0L7sQ/giphy.gif',
  'https://media.giphy.com/media/PFjXmKuwQsS9q/giphy.gif',
  'https://media.giphy.com/media/l41Yzr21DnsKAqLgQ/giphy.gif',
  'https://media.giphy.com/media/3o7qDVQ2GrFAf1MVgc/giphy.gif',
  'https://media.giphy.com/media/udiIFmPkJQzkI/giphy.gif',
  'https://media.giphy.com/media/frHK797nhEUow/giphy.gif',
  'https://media.giphy.com/media/egjCAYphmLmrm/giphy.gif',
  'https://media.giphy.com/media/prBaGUi1Vmy9a/giphy.gif',
  'https://media.giphy.com/media/AIDv87fiokBva/giphy.gif',
  'https://media.giphy.com/media/124gj4XvM8f3fa/giphy.gif',
  'https://media.giphy.com/media/26tnbo7HDeYacLQK4/giphy.gif',
  'https://media.giphy.com/media/wfc2xCiqEC0CY/giphy.gif',
  'https://media.giphy.com/media/KH1CTZtw1iP3W/giphy.gif',
  'https://media.giphy.com/media/l2JJsg4QcCOALD6WA/giphy.gif',
  'https://media.giphy.com/media/xUOwGeHJEQ46pdsvWE/giphy.gif',
  'https://media.giphy.com/media/l2Jedu4zTDKTk0khO/giphy.gif',
  'https://media.giphy.com/media/3otPoNepIidct5Wgi4/giphy.gif',
  'https://media.giphy.com/media/hgcqkgBLCbwl2/giphy.gif',
  'https://media.giphy.com/media/zfuzcZdVNYL6/giphy.gif',
];

module.exports = {
    name: 'kiss',
    aliases: [],
    category: 'Fun',
    utilisation: '{prefix}kiss [user]',    	

    execute(client, message) {
    	
    	if (!message.mentions.users.first()) return message.reply("You need to mention someone to kiss a user"); 
    	
    	if (message.mentions.users.first().id === message.author.id) return message.reply('wait , why you want to kiss yourself?');
    	
		message.channel.send(`OwO, ${message.author.username} has kissed ${message.mentions.users.first().username}`)
        message.channel.send(jokes[Math.floor(Math.random() * jokes.length)]);
		}
};
