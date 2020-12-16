readBooks = (time, book, callback) => {
    console.log(`Saya membaca ${book.name}`);
    setTimeout(function() {
        let sisawaktu = 0;
        if (time > book.timeSpent) {
            sisawaktu = time - book.timeSpent
            console.log(`Saya sudah membaca ${book.name} dan sisa waktu saya ${sisawaktu}`);
            callback (sisawaktu)
        } else {
            console.log("Waktu saya habis");
            callback(time)
        }
    }, book.timeSpent)
}

module.exports = readBooks