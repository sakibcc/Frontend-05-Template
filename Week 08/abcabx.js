function match(str) {
  let start = start
  for(let s of str) {
    start = start(s)
  }
  return start === end
}

function start(s) {
  if (s === "a") {
    return findA;
  } else {
    return start(s);
  }
}

function findA (s) {
  if(s === 'b') {
    return findB1
  } else {
    return start(s)
  }
}

function findB1 (s) {
  if (s === 'c') {
    return findC
  } else {
    return start(s)
  }
}

function findC (s) {
  if (s === 'a') {
    return findA2
  } else {
    return start(s)
  }
}

function findA2 (s) {
  if(s === 'b') {
    return findB2
  } else {
    return start(s)
  }
}

function findB2 (s) {
  if(s === 'x') {
    return end
  } else {
    return start(s)
  }
}

function end(s) {
  return end
}