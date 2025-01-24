function validateForm(event) {
  event.preventDefault(); // Mencegah refresh halaman
  const form = document.getElementById("form");
  const inputs = form.querySelectorAll(".semuaInput");
  let isValid = true;
  let errorMessage = "";

  inputs.forEach((input) => {
    const name = input.name;
    const value = input.value.trim();

    switch (name) {
      case "nama":
        if (value === "") {
          isValid = false;
          errorMessage += "Nama tidak boleh kosong.\n";
        }
        break;
      case "email":
        const emailPattern = /^[^@]+@[^@]+\.[a-z]{2,}$/i;
        if (!emailPattern.test(value)) {
          isValid = false;
          errorMessage += "Format email tidak valid.\n";
        }
        break;
      case "password":
        if (value.length < 8) {
          isValid = false;
          errorMessage += "Password minimal 8 karakter.\n";
        }
        break;
      case "tangal_lahir":
        if (value === "") {
          isValid = false;
          errorMessage += "Tanggal lahir tidak boleh kosong.\n";
        }
        break;
      case "umur":
        if (value < 17) {
          isValid = false;
          errorMessage += "Umur minimal 17 tahun.\n";
        }
        break;
      case "jenis_kelamin":
        const genderSelected = form.querySelector('input[name="jenis_kelamin"]:checked');
        if (!genderSelected) {
          isValid = false;
          errorMessage += "Jenis kelamin harus dipilih.\n";
        }
        break;
      case "agama":
        if (value === "") {
          isValid = false;
          errorMessage += "Agama harus dipilih.\n";
        }
        break;
      case "alamat":
        if (value === "") {
          isValid = false;
          errorMessage += "Alamat tidak boleh kosong.\n";
        }
        break;
      case "metode":
        if (value === "") {
          isValid = false;
          errorMessage += "Metode belajar harus dipilih.\n";
        }
        break;
    }
  });

  const errorMessageElement = document.getElementById("errorMessage");
  if (!isValid) {
    errorMessageElement.textContent = errorMessage;
  } else {
    alert = "Form berhasil dikirim!";
  }
}
