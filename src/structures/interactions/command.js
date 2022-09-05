const { CommandInteractionOption, CommandInteraction } = require('discord.js')
const Client = require('../client')

/**
 * @param { Client } client
 * @param { CommandInteraction } interaction
 * @constructor
 */
function RunCommand(client, interaction) {}

class Command {
    /**
     * @param {{ name: string, description: string, category: string, options: CommandInteractionOption, callback: RunCommand }}  data
     */
    constructor (data) {
        this.name = data.name
        this.description = data.description || 'A simple command.'
        this.category = data.category || 'Undefined'
        this.options = data.options || []
        this.execute = data.callback
    }
}

module.exports = Command
