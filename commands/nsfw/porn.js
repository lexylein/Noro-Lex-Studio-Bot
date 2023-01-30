const Discord = require('discord.js');
const got = require('got');
const db = require("quick.db");


module.exports = {
    name: 'porn',
    aliases: [],
    category: 'Nsfw',
    utilisation: '{prefix}porn',    	

    execute(client, message) {

const embed = new Discord.MessageEmbed();
	got('https://www.reddit.com/r/porn/random/.json')
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

			if (message.channel.nsfw) {
				message.channel.send(embed);
			} else {
				message.channel.send(client.language.NSFW);
			}
        
			
		})
		.catch(console.error);
}
	
};
