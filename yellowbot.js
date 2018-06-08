const Discord = require('discord.js')
const bot = new Discord.Client()
const ytb = require('./ytb')

bot.on('ready', function() {
    bot.user.setGame('A dislike les vidéos de YellowJohn').catch(console.error)
})

bot.on('guildMemberAdd', function (member) {
    member.createDM().then(function (channel) {
        channel.send('Bienvenu sur le serveur de YellowHon' + member.displayName)
    }).catch(console.error)
})

bot.on('message', function (message) {
    if (ytb.match(message)) {
        return ytb.action(message)
    }
    if (message.content === 'Salut')
        message.reply('salut')
    }
)

bot.on('message', function (message) {
    if (message.content === 'Ca va ?') {
        message.reply('je suis un bot...')
    }
})

bot.on('message', function (message) {
    if (message.content === 'salut') {
        message.reply('salut')
    }
})

bot.on('message', function (message) {
    if (message.content === 'sa va') {
        message.reply('je suis un bot...')
    }
})

bot.on('message', function (message) {
    ytb.parse(message)
})

bot.on('message', function (message) {
    if (message.content === 'Tg') {
        message.reply('toi ferme ta gueule')
    }
})

bot.on('message', function (message) {
    if (message.content === 'tg') {
        message.reply('toi ferme ta gueule')
    }
})

bot.login('NDU0MzM5NDQ5OTUwNjk5NTY1.DfsAaw.QxNg4wWznymvp-af2dEYF1g8lTc')