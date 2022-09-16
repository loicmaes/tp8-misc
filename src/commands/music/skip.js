const Command = require('../../structures/interactions/command')

module.exports = new Command({
    name: 'skip',
    category: 'Music',
    description: 'Passer à la musique suivante (si présente dans la file d\'attente).',
    async callback (client, interaction) {
        // SKIP THE CURRENT MUSIC AND PLAY THE NEXT IN QUEUE IF PRESENT
    }
})
