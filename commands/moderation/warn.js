const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'warn',
    aliases: [],
    category: 'Moderation',
    utilisation: '{prefix}warn [user] <reason>',

    execute(bot, message, args) {
        
        if(!message.guild.channels.cache.find(channel => channel.name === `bot-log`)) {
            return message.reply('you have not setup the server');
        }
        
        let warnPermErr = new MessageEmbed()
        .setColor('#ff0000')
        .setTitle("**User Permission Error!**")
        .setDescription("**Sorry, you don't have permissions to use this! ❌**")
            if(!message.channel.permissionsFor(message.member).has(['MANAGE_MESSAGES'])) return message.channel.send(warnPermErr);
    
            let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
            if(!member) return message.reply("Please mention a valid member of this server");
        
            let reason = args.slice(1).join(' ');
            if(!reason) reason = "No Reason Provided";
            
            member.send(`You have been warned by **${message.author.username}** for this reason: **${reason}** on the server **${message.guild}**`)
            .catch(error => message.channel.send(`Sorry <${message.author}> I couldn't n't warn because of : ${error}`));
            let warnEmbed = new MessageEmbed()
            .setColor('#ff0000')
            .setTitle("**__Warn Report__**")
            .setDescription(`**<@${member.user.id}> has been warned by <@${message.author.id}>**`)
            .addField(`**Reason:**`, `\`${reason}\``)
            .addField(`**Action:**`, `\`Warn\``)
            .addField(`**Moderator:**`, `${message.author}`)



        const LogChannel = message.guild.channels.cache.find(channel => channel.name === `bot-log`);
        
        const channel = LogChannel;
        
        channel.send(warnEmbed);
        
    }
};


