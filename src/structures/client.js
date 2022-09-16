const discord = require('discord.js')
const intents = new discord.Intents(32767)

class Client extends discord.Client {
    constructor () {
        super({ intents })

        this.color = '#333333'
        this.commands = new discord.Collection()
        this.musicQueueEmbed = undefined
        this.musicQueue = []
    }

    start () {
        require('../handlers/commands')(this)
        require('../handlers/events')(this)

        this.login(process.env.TOKEN).then(_ => console.log(`Logged in as ${this.user.tag}.`))
    }
}

module.exports = Client
