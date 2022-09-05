const discord = require('discord.js')
const Client = require('../client')

/**
 * @template { keyof discord.EventArgs } k
 * @param { Client } client
 * @param { discord.EventArgs[k] } eventArgs
 * @constructor
 */
function RunEvent(client, ...eventArgs) {}

class Event {
    /**
     * @param {{ name: string, callback: RunEvent }} data
     */
    constructor (data) {
        this.name = data.name
        this.execute = data.callback
    }
}

module.exports = Event
