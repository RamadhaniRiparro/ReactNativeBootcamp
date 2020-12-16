var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]

async function bacabukupromise() {
    let waktupromise = 10000
    for(let i = 0; i < books.length; i++) {
        waktupromise = await readBooksPromise(waktupromise, books[i]).then(function(sisawaktu) {
            return sisawaktu
        })
        .catch (function(sisawaktu){
            return sisawaktu
        })
    }
    console.log("selesai")
}

bacabukupromise()