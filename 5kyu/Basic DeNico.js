const deNico = (key, m) => {
    //divide up message
    let arr = []
    for(let i = 0; i < m.length; i+= key.length){
      arr.push(m.slice(i,i+key.length))
    }
    
    //get key
    let keyArr = []
    for(let letter of key) keyArr.push(key.split('').sort().indexOf(letter))
    
    //decode
    let str = ''
    for(let word of arr){
      for(let num of keyArr){
        word[num] ? str += word[num] : str += ''
      }
    }
    //getting rid of whitespace at end
    while(str[str.length - 1] == ' ')str = str.slice(0, str.length - 1)
    return str
  }