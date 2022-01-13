const Integracao_eWeLink = require('./Integracao_eWeLink.js');

exports.executar = async function (ctx) {
    switch(ctx.message.text){
        case 'hora':
                ctx.reply(`São ${new Date().toLocaleTimeString()}`)
            break;
        case 'Qual a boa?':
            ctx.replyWithPhoto('https://i.pinimg.com/originals/b0/90/6c/b0906c0987966ea8f64bf71272f6734e.png')
            break;  
        case 'Let\'s Code':
            ctx.replyWithAnimation('https://res.cloudinary.com/practicaldev/image/fetch/s--95y5eU9n--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://res.cloudinary.com/zaphodias/image/upload/f_auto/v1509903780/coding.gif')
            break; 
        case 'Luz':
            ctx.reply('Novo status - ' + JSON.stringify(await Integracao_eWeLink.alterarStatusLuz()));
            
            break;       
        default:
            ctx.replyWithHTML(`Comando <strong>${ctx.message.text}</strong> não reconhecido!`)
    }
}