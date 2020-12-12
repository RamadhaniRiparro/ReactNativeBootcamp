console.log('//Soal No. 1 (Range)')

function range(startNum, finishNum) {
    if (startNum === undefined || finishNum === undefined) {
        return (-1)
    } else {
        var array = [];
        if (startNum < finishNum) {
            for (var i = startNum; i <= finishNum; i++) {
                array.push(i)
            }
        } else if (startNum > finishNum) {
            for (var i = startNum; i >= finishNum; i--) {
                array.push(i)
            }
        }
        return (array)
    }
}

console.log(range(1, 10)) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(1)) // -1
console.log(range(11, 18)) // [11, 12, 13, 14, 15, 16, 17, 18]
console.log(range(54, 50)) // [54, 53, 52, 51, 50]
console.log(range()) // -1

console.log('//Soal No. 2 (Range with Step')

function rangeWithStep(startNum, finishNum, step) {
    if (startNum === undefined || finishNum === undefined) {
        return (-1)
    } else {
        var array = [];
        if (startNum < finishNum) {
            for (var i = startNum; i <= finishNum; i += step) {
                array.push(i)
            }
        } else if (startNum > finishNum) {
            for (var i = startNum; i >= finishNum; i -= step) {
                array.push(i)
            }
        }
        return (array)
    }
}

console.log(rangeWithStep(1, 10, 2)) // [1, 3, 5, 7, 9]
console.log(rangeWithStep(11, 23, 3)) // [11, 14, 17, 20, 23]
console.log(rangeWithStep(5, 2, 1)) // [5, 4, 3, 2]
console.log(rangeWithStep(29, 2, 4)) // [29, 25, 21, 17, 13, 9, 5] 

console.log('//Soal No. 3 (Sum of Range)')

function sum(startNum, finishNum, step) {
    if (startNum === undefined && finishNum === undefined) {
        return (0)
    } else if (finishNum === undefined) {
        return (startNum)
    }
    if (step === undefined) {
        step = 1
    }
    var array = rangeWithStep(startNum, finishNum, step)
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return (sum)
}

console.log(sum(1, 10)) // 55
console.log(sum(5, 50, 2)) // 621
console.log(sum(15, 10)) // 75
console.log(sum(20, 10, 2)) // 90
console.log(sum(1)) // 1
console.log(sum()) // 0 

console.log('//Soal No. 4 (Array Multidimensi)')

function dataHandling(input) {
    for (var i = 0; i < input.length; i++) {
        console.log('Nomor ID: ' + input[i][0])
        console.log('Nama Lengkap: ' + input[i][1])
        console.log('TTL: ' + input[i][2] + ' ' + input[i][3])
        console.log('Hobi: ' + input[i][4])
        console.log()
    }
}

var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

dataHandling(input)

console.log('//Soal No. 5 (Balik Kata')

function balikKata(string) {
    var n = string.length
    var newString = ''
    for (var i = n - 1; i >= 0; i--) {
        newString = newString + string[i]
    }
    return (newString)
}

console.log(balikKata("Kasur Rusak")) // kasuR rusaK
console.log(balikKata("SanberCode")) // edoCrebnaS
console.log(balikKata("Haji Ijah")) // hajI ijaH
console.log(balikKata("racecar")) // racecar
console.log(balikKata("I am Sanbers")) // srebnaS ma I 

console.log('//Soal No. 6 (Metode Array)')

function dataHandling2(arr) {
    arr.splice(1,1)
    arr.splice(1,0,"Roman Alamsyah Elsharawy")
    arr.splice(2,1)
    arr.splice(2,0,"Provinsi Bandar Lampung")
    arr.pop();
    arr.push("Pria")
    arr.push("SMA Internasional Metro")
    console.log(arr)

    var date = arr[3].split("/")
    var bulan = ''
    switch(date[1]){
        case '01': bulan = "Januari"; break;
        case '02': bulan = "Februari"; break;
        case '03': bulan = "Maret"; break;
        case '04': bulan = "April"; break;
        case '05': bulan = "Mei"; break;
        case '06': bulan = "Juni"; break;
        case '07': bulan = "Juli"; break;
        case '08': bulan = "Agustus"; break;   
        case '09': bulan = "September"; break;
        case '10': bulan = "Oktober"; break;
        case '11': bulan = "November"; break;
        case '12': bulan = "Desember"; break;
    }
    console.log(bulan)

    var tanggal = date.join("-")
    date.sort(function(val1, val2){return val2-val1})
    console.log(date)

    console.log(tanggal)

    console.log(arr[1].slice(0,15))
}

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);