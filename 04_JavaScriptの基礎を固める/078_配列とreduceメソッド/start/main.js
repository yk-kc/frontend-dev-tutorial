const arry = [1, 2, 3, 4, 5]

// reduceメソッド
arry.reduce(
  // reduceメソッドの第一引数
  function (accu, cur) {
    console.log(accu, cur)
    // return accu * cur
  },
  // reduceメソッドの第二引数
  10
)

const str = 'animation'
const strArry = str.split('')

console.log(strArry)

const result = strArry.reduce((accu, cur) => {
  // テンプレートリテラルを使うとより簡潔に記述できる
  return `${accu}<${cur}>`
  // return accu + '<' + cur + '>'
}, '')

console.log(result)
