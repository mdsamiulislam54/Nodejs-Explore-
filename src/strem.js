import fs from 'fs'
//file read
const readStreming = fs.createReadStream('./bigdata.txt')
//file write
const writeing = fs.createWriteStream('./output.txt')

// readStreming.on('data', (chunk)=>{
//     console.log(chunk.toString())
//     //fikle write and write chunk chunk
//     writeing.write(chunk)
// });


//simple same concept
readStreming.pipe(writeing)