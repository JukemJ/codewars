function capitalize(s){
    return [s.split('').map((x,i)=> i%2== 0 ? x.toUpperCase():x).join(''),
    s.split('').map((x,i)=> i%2== 1 ? x.toUpperCase():x).join('')]
  };