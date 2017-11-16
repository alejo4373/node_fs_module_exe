const path = require('path');
const fs = require('fs')

const lsByExt = (dirPath, ext) => {
    fs.readdir(dirPath, (err, data) => {
        if (err) throw err;
        data.forEach((elem) => {
            if(path.extname(elem) === "." + ext){
                console.log(elem)
            }
        })
    })
}

lsByExt("/home/alejandro/C4Q", "js")
