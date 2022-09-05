const fs = require('fs')
const discord = require('discord.js')
const Client = require('../structures/client')
const { loadFiles } = require('./files')
const Ascii = require('ascii-table')

/**
 * @param { Client } client
 * @returns {Promise<void>}
 */
module.exports = async client => {
    const table = new Ascii('Events')
    const events = loadFiles('./src/events/', true)

    events.forEach(file => {
        const event = require(`../events/${file}`)

        if (!event.name) return table.addRow('( ╯□╰ )', '🔸 FAILED', `Missing event's name!`)

        if (event.once) client.once(event.name, event.execute.bind(null, client))
        else client.on(event.name, event.execute.bind(null, client))
        table.addRow(event.name, '🔹 SUCCESS')
    })

    if (events.length !== 0) console.log(table.toString())
}
