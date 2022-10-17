const fs = require('fs')
const {resolve} = require('path')

const readStream = fs.createReadStream(resolve(__dirname,'input.txt'),{
    highWaterMark: 15
})

const createOutput = fs.createWriteStream(resolve(__dirname,'output.txt'))

readStream.on('readable', () => {
    try {
        createOutput.write(`[${readStream.read()}]\n`)
    } catch(error) {
        // catch the error when the chunk cannot be read.
    }
});

readStream.on('end',() => {
    createOutput.end()
})