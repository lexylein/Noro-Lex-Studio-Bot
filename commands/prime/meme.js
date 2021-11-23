const Discord = require('discord.js');
const got = require('got');


module.exports = {
    name: 'meme',
    aliases: [],
    category: 'Prime',
    utilisation: '{prefix}meme',    	

    execute(client, message) {

const embed = new Discord.MessageEmbed();
	got('https://www.reddit.com/r/memes/random/.json')
		.then(response => {
			const [list] = JSON.parse(response.body);
			const [post] = list.data.children;

			const permalink = post.data.permalink;
			const memeUrl = `https://reddit.com${permalink}`;
			const memeImage = post.data.url;
			const memeTitle = post.data.title;
			const memeUpvotes = post.data.ups;
			const memeNumComments = post.data.num_comments;

			embed.setTitle(`${memeTitle}`);
			embed.setURL(`${memeUrl}`);
			embed.setColor('#ff0000');
			embed.setImage(memeImage);
			embed.setFooter(`👍 ${memeUpvotes} 💬 ${memeNumComments}`);

          if(message.guild.id === "784348476220768280") return message.channel.send(embed);
		
	if(message.guild.id === "836299465051996212") return message.channel.send(embed);
		
	if(message.guild.id === "770040861261430794") return message.channel.send(embed);
       
    if(message.guild.id === "769163085113327638") return message.channel.send(embed);


        
   message.channel.send('the server has no prime from the bot');
        
			
		})
		.catch(console.error);
}
	
};
