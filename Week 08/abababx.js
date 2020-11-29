function macth (str) {
  let start = start
  for (let s of str) {
    start = start(s)
  }
  return start === end
}

function end (s) {
  return end
}

function start (s) {
  if (s === 'a') {
    return findA
  } else {
    return start(c)
  }
}

function findA (s) {
  if(s === 'b') {
    return findB
  } else {
    return start(c)
  }
}

function findB (s) {
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
    return findA(s)
  }
}
function findB2 (s) {
  if(s === 'a') {
    return findA3
  } else {
    return findB(s)
  }
}

function findA3 (s) {
  if(s === 'b') {
    return findB3
  } else {
    return findA2(s)
  }
}

function findB3(s) {
  if(s === 'x') {
    return end
  } else {
    return findB2(s)
  }
}