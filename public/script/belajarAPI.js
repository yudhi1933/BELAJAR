const keranjangProduct = [];
const products = [
  {
    id: 1,
    title: "Es Jeruk Peras",
    price: 10000,
    img: "./img/BelajarAPI/Es_Jeruk_Peras.jpg",
  },

  {
    id: 2,
    title: "Es Kelapa Muda",
    price: 45000,
    img: "./img/BelajarAPI/Es_Kelapa_Muda.jpg",
  },

  {
    id: 3,
    title: "Thai Tea",
    price: 15000,
    img: "./img/BelajarAPI/Thai_Tea.jpg",
  },

  {
    id: 4,
    title: "Es Leci Yakult",
    price: 20000,
    img: "./img/BelajarAPI/Es_Leci_Yakult.jpg",
  },

  {
    id: 5,
    title: "Es Kopi Gula Aren",
    price: 25000,
    img: "./img/BelajarAPI/Es_Kopi_Gula_Aren.jpg",
  },
];

const minuman = document.getElementById("minuman");
products.forEach((produk) => {
  const card = document.createElement("div");
  card.className = "grid grid-cols-2 mb-4 items-center p-4 border rounded-lg shadow-lg";
  card.innerHTML = `
      <img src="${produk.img}" alt="${produk.title}" class="w-36 h-auto rounded-lg">
      <div>
        <h3 class="font-serif">${produk.title}</h3>
        <p class="font-bold">${formatRupiah(produk.price)}</p>
        <svg id="svg-${produk.id}" onclick="tambahKeranjang(${
    produk.id
  })" class="w-8 h-8 fill-orange-600 hover:fill-orange-400 cursor-pointer active:scale-95 active:fill-orange-600 transition" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M504.717 320H211.572l6.545 32h268.418c15.401 0 26.816 14.301 23.403 29.319l-5.517 24.276C523.112 414.668 536 433.828 536 456c0 31.202-25.519 56.444-56.824 55.994-29.823-.429-54.35-24.631-55.155-54.447-.44-16.287 6.085-31.049 16.803-41.548H231.176C241.553 426.165 248 440.326 248 456c0 31.813-26.528 57.431-58.67 55.938-28.54-1.325-51.751-24.385-53.251-52.917-1.158-22.034 10.436-41.455 28.051-51.586L93.883 64H24C10.745 64 0 53.255 0 40V24C0 10.745 10.745 0 24 0h102.529c11.401 0 21.228 8.021 23.513 19.19L159.208 64H551.99c15.401 0 26.816 14.301 23.403 29.319l-47.273 208C525.637 312.246 515.923 320 504.717 320zM408 168h-48v-40c0-8.837-7.163-16-16-16h-16c-8.837 0-16 7.163-16 16v40h-48c-8.837 0-16 7.163-16 16v16c0 8.837 7.163 16 16 16h48v40c0 8.837 7.163 16 16 16h16c8.837 0 16-7.163 16-16v-40h48c8.837 0 16-7.163 16-16v-16c0-8.837-7.163-16-16-16z"/></svg>
      </div>
      `;
  minuman.appendChild(card);
});


function updateItem(){
  let comp = ""
  keranjangProduct.forEach(produk => {
    comp += `
    <li class="grid grid-cols-4 mb-2 items-center p-4 border rounded-lg shadow-lg">
      <div class="col-span-1">
        <img src="${produk.img}" alt="${produk.title}" class="w-20 h-auto rounded-lg">
      </div>
      <div class="col-span-3 flex gap-3">
          <button class="w-6 h-6 bg-orange-600 rounded active:bg-orange-400 transition text-white font-bold" onclick="kurangJumlah(${produk.id})">-</button>
            <input class="w-6 h-6 text-center border rounded-md border-gray-300 focus:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none 
            [&::-moz-number-spin-box]:hidden [caret-color:transparent]" type="number" value="${produk.quantity}">
            <button class="w-6 h-6 bg-orange-600 rounded active:bg-orange-400 transition text-white font-bold" onclick="tambahJumlah(${produk.id})">+</button>
          <p class="font-bold">${formatRupiah(produk.price * produk.quantity)}</p>
      </div>
    </li>`;
  });
  const elementDetailChart = document.getElementById("detail-minuman");
  elementDetailChart.innerHTML = comp;

  // const checkout = document.getElementById("checkout");
  // checkout.innerHTML = `<button class="bg-orange-600 active:bg-orange-400 transition w-36 h-10 rounded-lg text-white font-bold" onclick="checkout()">Checkout</button>`;

  // const totalHarga = keranjangProduct.reduce((sum, produk) => sum + (produk.price * produk.quantity), 0);
  // document.getElementById("total").innerHTML = `TOTAL : ${formatRupiah(totalHarga)}`;

  const totalHarga = keranjangProduct.reduce((sum, produk) => sum + (produk.price * produk.quantity), 0);
  const total = document.getElementById("total");
  const checkout = document.getElementById("checkout");
  checkout.innerHTML = `<button class="bg-orange-600 active:bg-orange-400 transition w-36 h-10 rounded-lg text-white font-bold" onclick="checkout()">Checkout</button>`;

  if (keranjangProduct.length === 0) {
    checkout.style.display = "none";
    total.style.display = "none";
  } else {
    checkout.style.display = "block";
    total.innerHTML = `TOTAL : ${formatRupiah(totalHarga)}`;
    total.style.display = "block";
  }
};

function tambahKeranjang(id){
  const indexProducts = products.findIndex(product => product.id === id);
  const dataProducts = products[indexProducts];
  const keranjangData = keranjangProduct[keranjangProduct.findIndex(pr => pr.id === id)];
  if (keranjangData === undefined) {
    keranjangProduct.push({...dataProducts, quantity: 1});
    let svg = document.getElementById(`svg-${id}`);
      if (svg.style.display === "none") {
        //munculkan kembali
        svg.style.display = "block";
      }else{
        //sembunyikan
        svg.style.display = "none"; 
      }
  } else {
    keranjangData['quantity'] += 1;
  }
  console.log(keranjangProduct)
  
  updateItem();
}

function tambahJumlah(id) {
  const indexData = keranjangProduct.findIndex(product => product.id === id);
  keranjangProduct[indexData]['quantity'] += 1;
  updateItem();
};

function kurangJumlah(id) {
  const indexData = keranjangProduct.findIndex(product => product.id === id);
    if (keranjangProduct[indexData] && keranjangProduct[indexData]['quantity'] === 1) {
      keranjangProduct.splice(indexData, 1);
      let svg = document.getElementById(`svg-${id}`);
      if (svg.style.display === "none") {
        //munculkan kembali
        svg.style.display = "block"; 
      }
    } else {
      keranjangProduct[indexData]['quantity'] -= 1;
    }
  updateItem();
}


function formatRupiah(angka) {
  let formatter = new Intl.NumberFormat("id-ID", {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return `Rp.${formatter.format(angka)}`;
};

function checkout(){
  const totalHarga = keranjangProduct.reduce((sum, produk) => sum + (produk.price * produk.quantity), 0);
  if (keranjangProduct.length === 0) {
    alert("Keranjang Kosong Silahkan Belanja Terlebih Dahulu!!!");
  } else {
    alert("Terima kasih telah berbelanja di cafe Yudhi."
    + "\nPesanan : " + '\n' + (keranjangProduct.map(produk => produk.title + " = " + produk.quantity).join("\n"))
    + "\nTotal : " + ( `${formatRupiah(totalHarga)}`)
    );
    location.reload();
  }
  updateItem();
  console.log(checkout);
}
