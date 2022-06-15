function incrementString (str){
    const digits = '0123456798'
    let top = ''
    let bot = ''
    for (let i = 0; i < str.length; i++){
      if (digits.includes(str[i])){
        top = str.slice(0,i)
        bot = str.slice(i)
        break
      }
    }
    if(!top.length && !bot.length) top = str
    let len = bot.length
    bot++
    bot = String(bot)
    while (bot.length < len) bot = '0' + bot
    return bot.length ? `${top}${bot}` : bot
  }