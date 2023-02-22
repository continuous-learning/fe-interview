const arr = [1, 1, 2, 3, 4, 2, 5, 12, 4]

const notRepeat: typeof arr = []

arr.forEach((item) => {
  if (!notRepeat.includes(item)) notRepeat.push(item)
})

console.log(notRepeat)
