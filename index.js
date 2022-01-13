var { Telegraf } = require('telegraf')
var ConfiguracoesAcesso = require('./src/ConfiguracoesAcesso.js')
var Comandos = require('./src/Comandos.js')

const bot = new Telegraf(ConfiguracoesAcesso.Token)

bot.telegram.getMe().then((botInfo) => {
  bot.options.username = botInfo.username
})

bot.command('quit', (ctx) => {
  //ctx.telegram.leaveChat(ctx.message.chat.id)
})

bot.command('start', (ctx) => {
  if(ctx.message.chat.username !== 'burinmatheus' && ctx.chat.id != -443624418){
    ctx.reply('Seu usuário não tem permissão para interagir com este Bot!')
    return;
  }
  ctx.reply(`Olá ${ctx.chat.first_name}!`)
})

bot.on('text', (ctx) => {
  
  ctx.reply(`Olá ${ctx.message.text}!`)
  if(ctx.message.chat.username !== 'burinmatheus' && ctx.chat.id != -443624418){
    ctx.reply('Seu usuário não tem permissão para interagir com este Bot!')
    return;
  }
  Comandos.executar(ctx)
})

bot.on('callback_query', (ctx) => {
  ctx.telegram.answerCbQuery(ctx.callbackQuery.id)
})

bot.on('inline_query', (ctx) => {
  const result = []
  ctx.telegram.answerInlineQuery(ctx.inlineQuery.id, result)
})

bot.launch()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))


