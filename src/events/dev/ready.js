const Event = require('../../structures/interactions/event')

module.exports = new Event({
    name: 'ready',
    async callback (client) {
        await client.user.setPresence({
            activities: [
                {
                    name: 'in dev',
                    type: 'PLAYING'
                }
            ],
            status: 'online'
        })

        const devGuild = await client.guilds.cache.get(process.env.DEV_GUILD)
        await devGuild.commands.set(client.commands.map(cmd => cmd))
    }
})
