/* No 1 if else */

var nama = "Ari";
var peran = "Werewolf";

if (nama == "" && peran == "") {
    console.log("Nama harus diisi!")
} else if (nama = "Jane" && peran == "Penyihir") {
    console.log("Selamat datang di Dunia Werewolf, Jane");
    console.log("Halo Penyihir Jane, kamu dapat melihat siapa yang menjadi werewolf!");

} else if (nama == "Jenita" && peran == "Guard") {
    console.log("Selamat datang di Dunia Werewolf, Jenita");
    console.log("Halo Guard Jenita, kamu akan membantu melindungi temanmu dari serangan werewolf!");

} else {
    console.log("Selamat datang di Dunia Werewolf, Ari");
    console.log("Halo Werewolf Ari, Kamu akan memakan mangsa setiap malam!")
}

/* No 2 Switch Case */
var tanggal = 1; 

switch(tanggal) {
    case 1 : { console.log('1'); break; }
}    
  
var bulan = 6;

switch(bulan) {
    case 6 : { console.log('juni'); break; }
}

var tahun = 2001;

switch(tahun) {
    case 2001 : { console.log("2001"); break; }
}
    

