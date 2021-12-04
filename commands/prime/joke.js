const jokes = [
  "What rock group has four men that don't sing? Mount Rushmore.",
  'When I was a kid, my mother told me I could be anyone I wanted to be. Turns out, identity theft is a crime.',
  'A guy goes to his doctor because he can see into the future. The doctor asks him,"How long have you suffered from that condition?" The guy tells him, "Since next Monday."',
  'What do sprinters eat before a race? Nothing, they fast!',
  'What concert costs just 45 cents? 50 Cent featuring Nickelback!',
  "What do you call a mac 'n' cheese that gets all up in your face? Too close for comfort food!",
  "Why couldn't the bicycle stand up by itself? It was two tired!",
  'Did you hear about the restaurant on the moon? Great food, no atmosphere!',
  'How many apples grow on a tree? All of them!',
  "Did you hear the rumor about butter? Well, I'm not going to spread it!",
  'I like telling Dad jokes. Sometimes he laughs!',
  'To whoever stole my copy of Microsoft Office, I will find you. You have my Word!',
  'q. How do you comfort a JavaScript bug? a. You console it',
  'When a JavaScript date has gone bad, "Don\'t call me, I\'ll callback you. I promise!"',
  'Dev1 saw a strange JavaScript function & asked, "What is this?". Dev2 responded, "I don\'t know. I would\'ve called you, but I was in a bind"',
  "q. Why was the JavaScript developer sad? a. Because he didn't Node how to Express himself",
  'q. Why did Jason cover himself with bubble wrap? a. Because he wanted to make a cross-domain JSONP request',
  "q. Why did the CoffeeScript developer keep getting lost? a. Because he couldn't find his source without a map",
  'q. Why did the developer go broke? a. Because he used up all his cache',
  'q. Why did the JavaScript boxer goto the chiropractor? a. Because his backbone was angular from a knockout and required attention',
];

const db = require("quick.db");

module.exports = {
    name: 'joke',
    aliases: [],
    category: 'Prime',
    utilisation: '{prefix}joke',
    
	execute(bot, message, args) {

        let moneydb = db.fetch(`prime_${message.guild.id}`)
        
    	let money = 0
        
        if (money < moneydb) return message.channel.send(jokes[Math.floor(Math.random() * jokes.length)]);


        
        message.channel.send('the server has no prime from the bot');
}
};