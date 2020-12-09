/* No. 1 Looping While */
console.log("LOOPING PERTAMA");
var angka = 0;
while(angka < 20){
    angka += 2
    console.log(angka + " - I love coding");

} 
console.log("LOOPING KEDUA");
var angka = 22;
while(angka >= 4){
    angka -= 2
    console.log(angka + " - I will become a mobile developer");

} 

console.log ("-------------------------------------------");

/* No. 2 For Looping */

for (var i = 1; i < 21; i++) {
        if (i % 2 != 0 && i % 3 == 0) {
        console.log(i + " - I Love Coding" );
}   else if (i % 2 == 1) {
        console.log(i + " - Santai");
}   else {
        console.log(i + " - Berkualitas" );
}
    
}

console.log ("-------------------------------------------");

/* No. 3 Membuat Persegi Panjang # */
var a = '';
for (var b = 1; b < 5; b++) {
    for(var d = 1; d < 9; d++) {
        a += '#';
}
        a += '\n'; 
}
console.log(a);

console.log ("-------------------------------------------");

/* No. 4 Membuat Tangga */
var a = '';
for (var b = 1; b < 6; b++) {
    for(var d = 1; d <= b; d++) {
        a += '#';
}
        a += '\n'; 
}
console.log(a);

console.log ("-------------------------------------------");

/* No. 5 Membuat Papan Catur */

let num = "";
for (i=1; i<= 8; i++) {
    for(j=1 ; j<= 8; j++) {
    
        if((i+j) % 2 == 0) {
    
        num += " # ";
} else {
        num += "#"
}
}
        num += "\n";
}
    console.log(num)