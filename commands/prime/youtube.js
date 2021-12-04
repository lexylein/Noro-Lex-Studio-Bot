const discord = require('discord.js')
const fetch = require('node-fetch')
const db = require("quick.db");

module.exports = {
    name: 'youtube',
    aliases: ['yt', 'ytt', 'youtubetogehter', 'youtubet', 'yttogehter'],
    category: 'Fun',
    utilisation: '{prefix}youtube',    	

    execute(Client, message, args) {
        
        let moneydb = db.fetch(`prime_${message.guild.id}`)
        
    	let money = 0
        
        if (!money < moneydb) return message.channel.send('the server has no prime from the bot');
        
        
        let channel = message.member.voice.channel;
        if(!channel) return message.channel.send("You have to be in a voice channel")
        
        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            
            method: "POST",
            body: JSON.stringify({
                
                max_age: 86400,
                max_uses: 0,
                target_application_id: "755600276941176913",
                target_type: 2,
                temporary: false,
                validate: null
                
            }),
            
            headers: {
                
                "Authorization": `Bot ${Client.token}`,
                "Content-Type": "application/json"
                
            }
            
        }).then(res => res.json()).then(invite => {
            if(!invite.code) return message.channel.send("Sadly i cant strat a youtube together")
            message.channel.send(`https://discord.com/invite/${invite.code}`)
        })
        
        }
};