const fs = require('fs');

fs.watch('watch-me.txt', (eventType, filename) => {
  //  if (eventType === "change") {
      console.log(`eventType: ${eventType}`)
        fs.readFile('watch-me.txt', 'utf8', (err, data) => {
            if (err) throw err;
            fs.writeFile("new-text.txt", data, (err) => {
                if (err) throw err;
                console.log("Wrote to new-text.txt")
            })
        })
        console.log("Watch-me.txt CHANGED")
    //}
})