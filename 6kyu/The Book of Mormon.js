function Mormons(startingNumber, reach, target) {
    let mission = 0
    while(startingNumber < target){
      mission++
      startingNumber += startingNumber * reach
    }
    return mission
  }