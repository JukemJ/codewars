function sc(obj){
    if(typeof obj == 'number')obj = obj.toString()
    for(let i = 0; i < obj.length; i++){
      if(obj[i] !== obj[obj.length - i - 1]) return false
    }
    return true
  }