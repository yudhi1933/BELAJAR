const cart = {};

function keranjang (nama, harga) {
  if (cart[nama]) {
      cart[nama].jumlah++;
  } else {
    cart[nama] = {
      harga : harga,
      jumlah : 1
    }
  }
  edit();
};

function kurang (nama) {
  if (cart[nama]) {
    if (cart[nama].jumlah > 1) {
      cart[nama].jumlah--;
    }else {
      delete cart[nama];
    }
    
  }
  edit();
};

function edit() {
  const cartList = document.getElementById("cart-list");
  cartList.innerHTML = "";
  for (let i = 0; i < Object.keys(cart).length; i++) {
    let namaJaket = Object.keys(cart)[i];
    let barang = cart[namaJaket];
    cartList.innerHTML += `
    <li class="flex space-x-2 border-b border-dashed border-gray-500 py-5">
    <span class="text-sm font-serif">${namaJaket}</span>
    <span class="text-sm">${formatRupiah(barang.harga)} *</span>
    <button onclick="kurang('${namaJaket}')" class="font-bold" type="button">-</button>
    <input value ="${barang.jumlah}" type="number" readonly class="w-6 h-6 text-center border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none 
    [&::-moz-number-spin-box]:hidden [caret-color:transparent]">
    <button onclick="keranjang('${namaJaket}', ${barang.harga})" class="font-bold" type="button">+</button>
    <span class="text-sm">${formatRupiah(barang.harga * barang.jumlah)}</span>
    </li>
    `;     
  }
  const total = document.getElementById("total");
  total.innerHTML = formatRupiah(Object.values(cart).reduce((a, b) => a + b.harga * b.jumlah, 0));
};

function formatRupiah(angka) {
  let formatter = new Intl.NumberFormat('id-ID', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
  });

  return `Rp.${formatter.format(angka)}`;
}

const checkout = document.getElementById("checkout-button");
const nama = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
checkout.addEventListener("click", () => {
    if (Object.keys(cart).length === 0) {
        alert("cart masih kosong!");
    } else if (nama.value === "" || email.value === "" || phone.value === "") {
        alert("Silahkan isi form terlebih dahulu !");
    } else {
        alert("Terima kasih telah berbelanja di toko kami!"
        + "\nNama : " + nama.value
        + "\nTotal : " + formatRupiah(total)
        );
        location.reload();
    }
});












