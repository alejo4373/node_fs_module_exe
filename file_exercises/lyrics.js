const fs = require('fs');


let lyrics1;
let lyrics2;

fs.readFile('lyrics-1.txt', 'utf-8',  (err, data) => {
    if (err) throw err;
    lyrics1 = data;
    console.log('Read lyrics-1')

    fs.readFile('lyrics-2.txt', 'utf-8', (err, data) => {
        if (err) throw err;
        lyrics2 = data;
        console.log('Read lyrics-2')

        fs.writeFile('lyrics-3.txt', lyrics1 + lyrics2, 'utf-8', (err) => {
            if (err) throw err;
            console.log('Wrote lyrics-3!');
        })
    });

});

// No matter the order writing happens before reading WHY???
// no clue in Node js
fs.writeFile('lyrics-1.txt', `I know that we are young,
And I know that you may love me,
`, 'utf-8', (err) => {
    if (err) throw err;
    console.log('Wrote file lyrics-1')
})

fs.writeFile('lyrics-2.txt', `But I just can't be with you like this anymore, 
Alejandro.`, 'utf8', (err) => {
    if (err) throw err;
    console.log('Wrote file lyrics-2')
})