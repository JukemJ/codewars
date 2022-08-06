function dbSort(a){
    return a.filter(x=>typeof x == 'number').sort((a,b)=>a-b)
            .concat(a.filter(x=>typeof x == 'string').sort())
  }