function sc(array){
    array.sort((a,b)=>a-b)
    return array.filter((x,i) => i % 2 == 0)
                .concat(array.filter((x,i) => i % 2 !== 0).reverse())
  }