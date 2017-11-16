/* #INSTRUCTIONS#
    Jabberwocky
    Copy and paste the following poem into a JavaScipt file (if you're curious,
    you can read about this poem here). Then create 28 new files, and call them jabb-1.txt, 
    jabb-2.txt, etc, all the way up to jabb-28.txt. Add one line of the poem, in order, 
    to each file. Once you have all 28 files, create a master file called jabb-master.txt 
    that contains the text of the entire poem.:
*/
const fs = require('fs');
var poem = '’Twas brillig, and the slithy toves \n      Did gyre and gimble in the wabe: \nAll mimsy were the borogoves, \n      And the mome raths outgrabe. \n\n“Beware the Jabberwock, my son! \n      The jaws that bite, the claws that catch! \nBeware the Jubjub bird, and shun \n      The frumious Bandersnatch!” \n\nHe took his vorpal sword in hand; \n      Long time the manxome foe he sought— \nSo rested he by the Tumtum tree \n      And stood awhile in thought. \n\nAnd, as in uffish thought he stood, \n      The Jabberwock, with eyes of flame, \nCame whiffling through the tulgey wood, \n      And burbled as it came! \n\nOne, two! One, two! And through and through \n      The vorpal blade went snicker-snack! \nHe left it dead, and with its head \n      He went galumphing back. \n\n“And hast thou slain the Jabberwock? \n      Come to my arms, my beamish boy! \nO frabjous day! Callooh! Callay!” \n      He chortled in his joy. \n\n’Twas brillig, and the slithy toves \n      Did gyre and gimble in the wabe: \nAll mimsy were the borogoves, \n      And the mome raths outgrabe.';

// Split poem in array and for each line create a new file and write the line to file
let poemArr = poem.split(/\n+/);
poemArr.forEach((elem, index) => {
    fs.writeFile('jabb-' + (index + 1) + ".txt", elem, 'utf8', (err) => {
        if (err) throw err;
    })
})

// Didn't think this was posible but it is!
//    fs.appendFile('jabb-master.txt', poemArr.map((elem) => {
//        return elem;
//    }, 'utf8', (err) => {
//        if (err) {
//            throw err
//        }
//    }))

// Very loose instructions about how to do this
fs.writeFile('jabb-master.txt', poem, "utf8", (err) => {
    if (err) throw err;
}) 
