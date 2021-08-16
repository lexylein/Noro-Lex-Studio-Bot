module.exports = {
    name: 'kick',
    aliases: [],
    category: 'Moderation',
    utilisation: '{prefix}kick [User ID]',
    
    execute(client, message, args) {
        
        if(!message.guild.channels.cache.find(channel => channel.name === `bot-log`)) {
            return message.reply('have not setup the server use ```!n setup```');
        }
      
if (!message.member.hasPermission('KICK_MEMBERS'))
        return message.reply('You do not have permissions to use that command');
        
      if (args.length === 0)
        return message.reply('Please provide an User ID');
        
      const member = message.guild.members.cache.get(args[0]);
        
      if (member) {
        member
          .kick()
          .then((member) => message.channel.send(`${member} was kicked.`))
          .catch((err) => message.channel.send('I cannot kick that user :('));
      } else {
        message.channel.send('I do not have a permission or member was not found');
      }
      
    },
};