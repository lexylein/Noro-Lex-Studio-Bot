module.exports = async (client) => {
	
	client.logger.loader(`[BOT] ${client.color.chalkcolor.red('[FINISH]')} Logged in as ${client.user.username}. Ready on ${client.guilds.cache.size} servers`);
    client.user.setActivity(client.config.discord.activity);
};