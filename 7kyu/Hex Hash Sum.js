function hexHash(code){
    return code.split('').map(x => x.charCodeAt(0).toString(16)).join('').split('').filter(char => !/[a-zA-Z]/.test(char)).reduce((a,b)=>a + +b,0)
    
  }