//console.log(Number(process.argv[2]) + Number(process.argv[3]))

const fs = require('fs');

fs.watch('errors.txt', (eventType, filename) => {
    console.log(`${eventType} in file ${filename}`);
})
