import fs from 'fs'

const readStreming = fs.createReadStream('./bigdata.txt')
const writeing = fs.createWriteStream('./output.txt')

readStreming.on('data', (chunk)=>{
    console.log(chunk.toString())
    writeing.write(chunk)
})