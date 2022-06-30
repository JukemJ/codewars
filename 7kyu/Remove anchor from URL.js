function removeUrlAnchor(url){
    return url.includes('#') ? url.slice(0,url.indexOf('#')) : url
  }