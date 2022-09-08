// FS
// const fs = require('fs')

// 1st Method

// const fs = require('fs')
const { readFileSync, writeFileSync } = require('fs');
console.log('start');
const first = readFileSync('./content/subfolder/first.txt','utf8')
const second = readFileSync('./content/subfolder/second.txt','utf8')

writeFileSync(
    './content/result-sync.txt',
    `Here is the result: ${first}, ${second}`, 
    { flag: 'a' }
    )
    console.log('Done with task');
    console.log('Starting the next one');