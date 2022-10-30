const { Collection } = require("discord.js");
const db = require("quick.db");

module.exports = async (bot, message) => {   

	const prefix = bot.config.discord.prefix;

    //LANGUAGE
	if(db.fetch(`lang_${message.guild.id}`) === null) {
		db.set(`lang_${message.guild.id}`, "en")
	}
	let lang = db.fetch(`lang_${message.guild.id}`)
    bot.language = require(`../language/${lang}.js`)

   // BOT MENTION
   if(message.content.match(new RegExp(`^<@!?${bot.user.id}>( |)$`))){
       message.channel.send(bot.language.MENTION_BOT.replace(/<name>/g, bot.user.username).replace(/<prefix>/g, prefix))
       return
   }

    if(message.author.bot){return}
    if(!message.content.startsWith(prefix)){return}

        const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const cmd = bot.commands.get(command) || bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));

    if (cmd) cmd.execute(bot, message, args);
};