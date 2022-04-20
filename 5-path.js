const path = require('path');

const filePath = path.join(__dirname, 'cont', 'subfolder', 'test.txt');
console.log(filePath);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute)