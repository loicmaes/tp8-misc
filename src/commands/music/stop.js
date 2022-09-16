const Command = require('../../structures/interactions/command')

module.exports = new Command({
    name: 'stop',
    category: 'Music',
    description: 'Arrêter la lecture de la musique courante et supprimer la file d\'attente.',
    async callback (client, interaction) {
        // PAUSE THE CURRENT MUSIC
    }
})
