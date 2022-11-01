// TITLES is a preloaded array of String to search throught

function search(searchTerm) {
    return TITLES.filter(x => x.toLowerCase().includes(searchTerm))
  }