readBooksPromise = (time, book) => {
    console.log(`Saya mulai membaca ${book.name}`)
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            let sisawaktu = time - book.timeSpent
            if (sisawaktu >= 0) {
                console.log(`Saya sudah selesai membaca ${book.name} dan sisa waktu saya ${sisawaktu}`);
                resolve(sisawaktu)
            } else {
                console.log(`Saya tidak punya waktu untuk baca buku ${book.name}`);
                reject(sisawaktu)
            }

            
        }, book.timeSpent)
    })
}

module.exports = readBooksPromise