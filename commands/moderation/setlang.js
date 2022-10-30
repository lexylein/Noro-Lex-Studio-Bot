 const db = require("quick.db");

module.exports = {
    name: 'setlang',
    aliases: ['language', 'lang', 'setlanguage'],
    category: 'Moderation',
    utilisation: '{prefix}setlang [language]',
	execute(bot, message, args) {

        if(!args[0]) return message.channel.send(bot.language.SETLANG_ERR)
			
		if(args[0] === "de") {
            db.set(`lang_${message.guild.id}`, "de")
			message.channel.send(bot.language.SETLANG_SUCCESS[0])
        }

        let lang;
        if(args[0] === "en") {
            db.set(`lang_${message.guild.id}`, "en")
            message.channel.send(bot.language.SETLANG_SUCCESS[1])
        }
	},
};