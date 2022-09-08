// FS
// const fs = require('fs')

// 2nd Method
const {readFile, writeFile} = require('fs')
console.log('Start');

readFile('./content/subfolder/first.txt', 'utf8', (err, result) =>{
    if(err){
        console.log(err)
        return
    }
    // console.log(result)
    const first = result;
    readFile('./content/subfolder/second.txt', 'utf-8', (err, result) =>{
        if(err){
            console.log(err)
            return
        }
        const second  = result 
        writeFile(
                    './content/result-async.txt',
                    `Here is the result: ${first}, ${second}`
                    ,(err, result) =>{
                        if(err){
                            console.log(err)
                            return
                        }
                        console.log('Done with this task')
                    }
                )
    })
})
console.log('Starting the next one');