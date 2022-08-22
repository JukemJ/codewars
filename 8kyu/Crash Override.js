function aliasGen(first,last){
    if(!firstName[first[0].toUpperCase()] || !surname[last[0].toUpperCase()]){
      return 'Your name must start with a letter from A - Z.'
    }
    return `${firstName[first[0].toUpperCase()]} ${surname[last[0].toUpperCase()]}`
  }