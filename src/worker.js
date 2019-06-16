/* global self */

function fib(n) {
  if (n < 2) {
    return n
  }
  return fib(n - 1) + fib(n - 2)
}

function onMessage(evt) {
  const {index} = evt.data
  const number = fib(index)

  self.postMessage({index, number})
}

self.addEventListener('message', onMessage)
