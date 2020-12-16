var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]

let waktu = 10000;
let i = 0;

BacaBuku = () => {
    readBooks(waktu, books[i], function(sisawaktu){
        i++
        waktu = sisawaktu
        if (i < books.length)
        BacaBuku()
    })
}

BacaBuku()