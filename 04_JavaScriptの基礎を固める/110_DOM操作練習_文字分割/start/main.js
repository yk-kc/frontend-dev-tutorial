document.addEventListener('DOMContentLoaded', function () {
  const el = document.querySelector('.animate-title')
  const str = el.innerHTML.trim().split('')

  // let concatStr = ''

  // for (let c of str) {
  //   c = c.replace(' ', '&nbsp;')
  //   concatStr = concatStr + `<span class="char">${c}</span> `
  // }

  // reduceメソッドに書き換え
  el.innerHTML = str.reduce((acc, curr) => {
    curr = curr.replace(' ', '&nbsp;')
    return `${acc}<span class="char">${curr}</span>`
  }, '')
})
