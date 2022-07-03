function prefill(n, v) {
    if(!/^[0-9]+$/.test(n)) throw new TypeError(`${n} is invalid`)
    if(n == 0) return []
    let array = new Array(n)
    return array.fill(v)
  }
  
  function TypeError(message) {
    this.message = message;
    this.name = 'TypeError';
  }