/* No 1 if else */

var nama = "Ramadhani Riparro";
var peran = "Werewolf";

if (nama == "" && peran == "") {
    console.log("Nama harus diisi!")
} else if (nama = "Ramadhani Riparro" && peran == "") {
    console.log("Halo Ramadhani Riparro, Pilih peranmu untuk memulai game!");

} else if (nama = "Jane" && peran == "Penyihir") {
    console.log("Selamat datang di Dunia Werewolf, Jane");
    console.log("Halo Penyihir Jane, kamu dapat melihat siapa yang menjadi werewolf!");

} else if (nama == "Jenita" && peran == "Guard") {
    console.log("Selamat datang di Dunia Werewolf, Jenita");
    console.log("Halo Guard Jenita, kamu akan membantu melindungi temanmu dari serangan werewolf!");

} else {
    console.log("Selamat datang di Dunia Werewolf, Ramadhani Riparro");
    console.log("Halo Werewolf Ramadhani Riparro, Kamu akan memakan mangsa setiap malam!")
}

/* No 2 Switch Case */
var tanggal = 1; 
var bulan = 9;
var tahun = 1997;

switch(bulan) {
    case 1:   { console.log(tanggal + " Januari " + tahun); break; }
    case 2:   { console.log(tanggal + " Februari " + tahun); break; }
    case 3:   { console.log(tanggal + " Maret " + tahun); break; }
    case 4:   { console.log(tanggal + " April " + tahun); break; }
    case 5:   { console.log(tanggal + " Mei " + tahun); break; }
    case 6:   { console.log(tanggal + " Juni " + tahun); break; }
    case 7:   { console.log(tanggal + " Juli " + tahun); break; }
    case 8:   { console.log(tanggal + " Agustus " + tahun); break; }
    case 9:   { console.log(tanggal + " September " + tahun); break; }
    case 10:   { console.log(tanggal + " Oktober " + tahun); break; }
    case 11:   { console.log(tanggal + " November " + tahun); break; }
    case 12:   { console.log(tanggal + " Desember " + tahun); break; }
}
