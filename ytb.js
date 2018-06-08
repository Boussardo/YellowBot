const Command = require('./commands')

module.exports = class ytb extends Command {

    static match (message) {
        return message.content.startsWith('ytb')
    }

    static action (message) {
        let args = message.content.split(' ')
        args.shift()
        message.delete()
        message.reply('https://www.youtube.com/channel/UCix46Fk6uKmUkI2_bAaHkZw')
    }

}