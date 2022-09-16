const Command = require('../../structures/interactions/command')
const Embed = require('../../structures/builders/embed')

module.exports = new Command({
    name: 'setup',
    category: 'Commons',
    description: 'Mettre en places les salons requis pour le Bot.',
    options: [
        {
            type: 'STRING',
            name: 'category_id',
            description: 'Catégorie cible',
            required: false
        }
    ],
    async callback(client, interaction) {
        const guild = interaction.guild
        const category = await guild.channels.fetch(interaction.options.getString('category_id'))

        if (category.type !== 'GUILD_CATEGORY') return interaction.reply({ content: null, embeds: [ new Embed(client, { description: ':x: Le salon ciblé n\'est pas une catégorie !' }).build() ], ephemeral: true })

        // CREATE MUSIC CHANNEL
        const music = await guild.channels.create('🎵music', { parent: category })
        await music.send({ files: [ './assets/music.png' ] })
        music.send({
            // Join a voice channel and queue songs by name or url in here.
            content: '\n **__FILE D\'ATTENTE__ [0 son(s)]**\nRejoignez un salon vocal et ajoutez des sons à la file d\'attente par leur nom ou leur lien.',
            embeds: [ new Embed(client, {
                title: 'Aucun son en cours de lecture',
                color: '#4895F1',
                image: 'https://but.maesloic.fr/assets/images/music-thumbnail.png',
                footer: { text: '' }
            }).build() ]
        }).then(msg => client.musicQueueMessage = msg.id)

        // CREATE SOUNDBOARD CHANNEL
        const soundboard = await guild.channels.create('🥳soundboard', { parent: category })
        await soundboard.send({ files: [ './assets/soundboard.png' ] })
        await soundboard.send({
            embeds: [ new Embed(client, {
                title: ':partying_face: BOOMER :beers:',
                description: `Faites chier vos amis avec les ~~pires~~ meilleurs mêmes de l'histoire :zany_face:`,
                color: '#F93579',
                image: 'https://but.maesloic.fr/assets/images/soundboard-thumbnail.png',
                footer: { text: '' }
            }).build() ]
        })

        interaction.reply({ content: null, embeds: [ new Embed(client, { description: `:white_check_mark: Les salons ont bien été mis en place !`}).build() ], ephemeral: true })
    }
})
