/* eslint no-unmodified-loop-condition:0 no-console:0 */

const startBtn = document.querySelector('.start')
const list = document.querySelector('.list')
const range = document.querySelector('.range')
const numberrange = document.querySelector('.numberrange')
const input = document.querySelector('.number')

startBtn.addEventListener('click', onStart, true)
range.addEventListener('click', onChange, true)

const worker = new window.Worker('worker.js')
worker.addEventListener('message', onMessage)
function onMessage(evt) {
  const {index, number} = evt.data
  list.innerHTML += `<li>${index} => ${number}</li>`
}

function onStart() {
  generateAndPrint(input.value)
  // worker.postMessage({index: input.value})
}

function fib(n) {
  if (n < 2) {
    return n
  }
  return fib(n - 1) + fib(n - 2)
}

function generateAndPrint(n = 0) {
  const current = fib(n)
  list.innerHTML += `<li>${n} => ${current}</li>`
}

function onChange(evt) {
  numberrange.innerHTML = evt.target.value
}
