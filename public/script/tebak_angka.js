let maxAngka = 3;
let maxKesempatan = maxAngka;
let kesempatan = document.getElementById("kesempatan");
let random = Math.floor(Math.random() * 10) + 1;

function nomorAcak(nomor) {
  if (maxKesempatan > 0) {
    if (nomor == random) {
      kesempatan.innerHTML = "Selamat Anda Menang! Angka yang benar adalah " + random;
      return;
    } else if (nomor < random) {
      maxKesempatan--;
      kesempatan.innerHTML = "Angka terlalu kecil " + maxKesempatan;
    } else if (nomor > random) {
      maxKesempatan--;
      kesempatan.innerHTML = "Angka terlalu besar " + maxKesempatan;
    }
  }
  if (maxKesempatan === 0) {
    kesempatan.innerHTML = "Anda Kalah! Angka yang benar adalah " + random;
  }
}
