var shortener = function(message) {
    while(message.length > 160){
      message = message.split('')
      let lastSpace = message.lastIndexOf(' ')
      if(lastSpace == -1) return message.join('')
      message.splice(lastSpace,1)
      message[lastSpace] = message[lastSpace].toUpperCase()
      message = message.join('')
    }
    return message
  }