function uniqueSum(lst){
    return lst.length ? Array.from(new Set(lst)).reduce((a,b)=>a+b,0) : null
  }