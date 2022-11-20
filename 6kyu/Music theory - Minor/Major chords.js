function minorOrMajor(chord){
    chord = chord.split(' ')
    if(chord.length != 3) return 'Not a chord'
    let first =  notes.findIndex(x => x.includes(chord[0]))
    let second =  notes.findIndex(x => x.includes(chord[1]))
    let third =  notes.findIndex(x => x.includes(chord[2]))
    let array = [first,second,third].map((x,i,arr) => x < arr[i-1] ? x + 12 : x)
    array = array.map((x,i,arr) => x < arr[i-1] ? x + 12 : x)
    if(array[1] - array[0] == 3 && array[2] - array[1] == 4) return 'Minor'
    if(array[1] - array[0] == 4 && array[2] - array[1] == 3) return 'Major' 
    return 'Not a chord'
  }