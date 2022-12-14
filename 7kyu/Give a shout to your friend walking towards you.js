function madShout(sidewalk){
    let diff = sidewalk.indexOf('F') - sidewalk.indexOf('Y')
    return `O${'i'.repeat(Math.ceil(diff/2))} F!`
  }