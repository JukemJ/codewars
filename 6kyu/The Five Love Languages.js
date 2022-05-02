const LOVE_LANGUAGES = ["words", "acts", "gifts", "time", "touch"]
function loveLanguage(partner,weeks) {
    let obj = {'words': 0, 'acts': 0, 'gifts': 0, 'time': 0, 'touch': 0}
    for (let i = 1; i <= weeks; i++){
      for (let x of LOVE_LANGUAGES){
        if (partner.response(x) == 'positive') obj[x]++
      }
    }
    return Object.keys(obj).sort((a,b) => obj[b] - obj[a])[0]
  }