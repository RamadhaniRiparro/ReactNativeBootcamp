/* No. 1 Looping While */
console.log("LOOPING PERTAMA");
var angka = 0;
while(angka < 20){
    angka += 2
    console.log(angka + " - I love coding")

} 
console.log("LOOPING KEDUA");
var angka = 22;
while(angka >= 4){
    angka -= 2
    console.log(angka + " - I will become a mobile developer")

} 
/* No. 2 For Looping */

for (var i = 1; i <= 20; i++) {
    if (i % 3 == 0 && i % 2 != 0) {
        console.log(i + " - Santai");
}   else if (i % 2 == 0) {
        console.log(i + " - Berkualitas");
}   
    
}


/* No. 3 Membuat Persegi Panjang # */
var a = '';
for (var b = 1; b < 5; b++) {
    for(var d = 1; d < 9; d++) {
        a += '#';
}
        a += '\n'; 
}
console.log(a);

/* No. 4 Membuat Tangga */
var a = '';
for (var b = 1; b < 7; b++) {
    for(var d = 1; d < b; d++) {
        a += '#';
}
        a += '\n'; 
}
console.log(a);

