const Command = require('../../structures/interactions/command')

module.exports = new Command({
    name: 'resume',
    category: 'Music',
    description: 'Reprende la lecture de la musique.',
    async callback (client, interaction) {
        // RESUME THE CURRENT MUSIC
    }
})
