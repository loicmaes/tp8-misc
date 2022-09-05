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
    const table = new Ascii('Commands')
    const commands = loadFiles('./src/commands/', true)

    commands.forEach(file => {
        const command = require(`../commands/${file}`)

        if (!command.name) return table.addRow(command.name, command.description, command.category, '🔸 FAILED', `Missing command's name!`)
        if (!command.description) return table.addRow(command.name, command.description, command.category, '🔸 FAILED', `Missing command's description!`)
        if (!command.category) return table.addRow(command.name, command.description, command.category, '🔸 FAILED', `Missing command's category!`)

        client.commands.set(command.name, command)
        table.addRow(command.name, command.description, command.category, '🔹 SUCCESS')
    })

    if (commands.length !== 0) console.log(table.toString())
}
