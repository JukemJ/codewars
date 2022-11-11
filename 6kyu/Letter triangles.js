function triangle(row) {
    while(row.length > 1){
      let str = ''
      for(let i = 0; i < row.length - 1; i++){
        let one = row[i].charCodeAt(0) - 96
        let two = row[i+1].charCodeAt(0) - 96
        str += String.fromCharCode((one + two) % 26 + 96)
      }
      row = str
    }
    return row == '`' ? 'z' : row
  }