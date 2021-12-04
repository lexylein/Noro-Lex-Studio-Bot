const Discord = require('discord.js');
const got = require('got');
const db = require("quick.db");


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
        
        let moneydb = db.fetch(`prime_${message.guild.id}`)
        
    	let money = 0
        
        if (money < moneydb) return message.channel.send(embed);


        
   message.channel.send('the server has no prime from the bot');
        
			
		})
		.catch(console.error);
}
	
};
