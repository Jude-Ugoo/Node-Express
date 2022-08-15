const { readFile, writeFile } = require('fs')

console.log('start')
// read file inside first.txt file
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  const first = result

  // read file inside secoud.txt file
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    const second = result

    // write file inside result-async.txt file
    writeFile(
      './content/result-async.txt',
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
        console.log('done with this task')
      }
    )
  })
})
console.log('starting next task')
