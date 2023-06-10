const dcl = document.querySelector('.dcl')
const load = document.querySelector('.load')

document.addEventListener('DOMContentLoaded', function () {
  dcl.classList.add('done')
})

// document.は使えない
window.addEventListener('load', function () {
  load.classList.add('done')
})
