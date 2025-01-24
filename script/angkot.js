const data_table = document.getElementById("data_angkot");
const harga = 5000;
const angkots = [];
const angkot = {
  trayek: "Semarang Utara - Bekasi",
  sopir: "Yudi thok",
  kas: 0,
  penumpang: {
    naik: 0,
    turun: 0,
  },
};
angkots.push(angkot);
angkots.push({
  trayek: "Semarang Utara - Bekasi",
  sopir: "anu",
  kas: 12000,
  penumpang: {
    naik: 13,
    turun: 12,
  },
})
angkots.forEach((t) => {
  const html_tr = document.createElement("tr");
  const anu = ["sopir", "trayek", "kas", ["penumpang", "naik"], ["penumpang", "turun"]];
  anu.forEach((anu_data) => {
    const new_td = document.createElement("td");
    if (Array.isArray(anu_data)) {
      new_td.textContent = t[anu_data[0]][anu_data[1]];
    } else {
      new_td.textContent = t[anu_data];
    }
    new_td.className = "border border-gray-400 px-4 py-2"
    html_tr.append(new_td);
  });
  data_table.appendChild(html_tr);
});