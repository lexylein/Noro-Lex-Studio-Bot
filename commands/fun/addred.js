module.exports = {
    name: 'addred',
    aliases: [],
    category: 'Fun',
    utilisation: '{prefix}addred [user]',    	

    execute(client, message, args) {
                    
                    let red = message.guild.roles.cache.find(r => r.name === "Red");
                    
                    let member = message.mentions.members.first();


                
                member.roles.add(red).catch(console.error);
                return message.reply(`the role red add successful`);
    }
};
