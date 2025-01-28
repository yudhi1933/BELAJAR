let currentInput = ""; // menyimpan angka yang sedang di input
let previousValue = ""; // Menyimpan angka sebelumnya
let operator = ""; // Menyimpan operator yang digunakan

// Fungsi untuk memperbarui tampilan
function updateDisplay(value) {
  document.getElementById("myInput").value = value;
}

// Fungsi untuk memasukkan angka
function inputNumber(value) {
  currentInput += value;
  updateDisplay(currentInput);
}

function inputOperator(op) {
  if (currentInput === "") return; // Jika currentInput kosong, tidak melakukan apa-apa
  if (operator !== "") {
    calculate(); // hitung angka jika ada operator sebelumnya
  }
  operator = op; 
  previousValue = currentInput;
  currentInput = "";
}

// Fungsi untuk menghitung hasil
function calculate() {
  if (currentInput === "" || previousValue === "") return; // Cek validasi input
  const prev = parseFloat(previousValue);
  const curr = parseFloat(currentInput);
  let result;

  switch (operator) {
    case "+":
      result = prev + curr;
      break;
    case "-":
      result = prev - curr;
      break;
    case "*":
      result = prev * curr;
      break;
    case "/":
      result = curr !== 0 ? prev / curr : "Error"; // Hindari pembagian oleh 0
      break;
    default:
      return;
  }

  currentInput = result.toString();
  previousValue = "";
  operator = "";
  updateDisplay(currentInput);
}

//menghapus semua yang ada di input
function resetCalculator() {
  currentInput = "";
  previousValue = "";
  operator = "";
  updateDisplay("");
}

function backspace() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay(currentInput);
}