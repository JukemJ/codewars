function countPhotos(road){
    let right = 0
    let left = 0
    let cameras = 0
    let photos = 0
    for(let letter of road){
      switch (letter){
        case '<':
          photos += cameras
          left++
          break
        case '>':
          right++
          break
        case '.':
          photos += right
          cameras++
          break
      }
    }
    return photos
  
  }