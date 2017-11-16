const fs = require('fs');

let folderName = "folder-1"
fs.mkdir(folderName, () => {
    console.log(`Created ${folderName}`)
})

fs.rmdir(folderName, (err, data) => {
    if (err) throw err;
    console.log(`Deleted ${folderName}`)
})

//Create 100 directories
for (var i = 1; i <= 100; i++) {
    let folderName = "folder-" + i
    fs.mkdir(folderName, () => {
        console.log(`Created ${folderName}`)
    })
}

//Rename directories
for (var i = 1; i <= 100; i++) {
    let folderName = "folder-" + i
    fs.rename(folderName, "new-" + folderName);
}

//Deleting directories
for (var i = 1; i <= 100; i++) {
    fs.rmdir("new-folder-" + i, (err, data) => {
        if (err) throw err;
        console.log(`Deleted new-folder-${i}`)
    })
}
