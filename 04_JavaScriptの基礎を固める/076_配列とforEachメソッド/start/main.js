const arry = [1, 2, 3, 4, 5]

arry.forEach((val, i, ary) => console.log(val, i, ary))

for (let i = 0; i < arry.length; i++) {
  const v = arry[i]
  console.log(v, i, arry)
}
