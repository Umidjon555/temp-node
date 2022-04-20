const {readFileSync, writeFileSync}  = require('fs')

const firstText = readFileSync('./content/first.txt', 'utf8');

const second = readFileSync('./content/second.txt', 'utf8')

const newFile = writeFileSync('./content/result.txt', `This is new ${firstText + second}`)

console.log(newFile)