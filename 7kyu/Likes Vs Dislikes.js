// Like, Dislike, Nothing come from Preloaded

function likeOrDislike(buttons) {
    return buttons.reduce((a,b) => a == Nothing ? b : a==b ? Nothing : b, Nothing)
  }