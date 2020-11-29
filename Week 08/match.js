function match (str) {
  let finda = false
  let findb = false
  let findc = false
  let findd = false
  let finde = false
  for (let s of str) {
    if(s === 'a') {
      finda = true
    } else if (finda && s === 'b') {
      findb = true
    } else if (findb && s === 'c') {
      findc = true
    } else if (findc && s === 'd') {
      findd = true
    } else if (findd && s === 'e') {
      return true
    } else {
      finda = false
      findb = false
      findc = false
      findd = false
      finde = false
    }
  }
  return false
}
