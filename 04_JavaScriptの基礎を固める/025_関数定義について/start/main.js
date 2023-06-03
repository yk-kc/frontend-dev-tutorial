const hello = function (name, age) {
  //  let name = '山田太郎'
  console.log('hello ' + name + age)
  return name + age
}
// ↑と同じ意味だけどこっちは関数の実行文より後でも大丈夫
//function hello(name, age){
//  console.log('hello ' + name + age)
//  return name + age
//}

hello('山田太郎', 10)
const returnVal = hello('山田花子', 20)
console.log(returnVal)
