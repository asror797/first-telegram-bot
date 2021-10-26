const TelegramApi = require('node-telegram-bot-api')
const token="2086657845:AAGd6uV_Foz9lna5DcibUPNGAhb7sdmkEDg"

const bot = new TelegramApi(token, {polling:true})


bot.on ( 'message', msg => {
  const text = msg.text
  const chatId = msg.chat.id
  bot.sendMessage (chatId, 'nima gap')
})