//halaman kalkulator

console.log("hello, ini halaman kalkulator");

// Membuat Object Kalkulator

const kalkulator = {
  angkaDisplay: "0",
  operator: null,
  angkaPertama: null,
  tungguAngkaKedua: false,
};

//Membuat fungsi updating display

function updateDisplay() {
  document.querySelector("#displayNumber").innerText = kalkulator.angkaDisplay;
}

// Membuat fungsi reset display number kalkulator

function resetKalkulator() {
  kalkulator.angkaDisplay = "0";
  kalkulator.operator = null;
  kalkulator.angkaPertama = null;
  kalkulator.tungguAngkaKedua = false;
}

// Membuat fungsi menginput angka

function inputDigit(digit) {
  if (kalkulator.angkaDisplay === "0") {
    kalkulator.angkaDisplay = digit;
  } else {
    kalkulator.angkaDisplay += digit;
  }
}

// membuat fungsi input angka menjadi negative dan positiv

function inverseAngka() {
  if (kalkulator.angkaDisplay === "0") {
    return;
  }
  kalkulator.angkaDisplay = kalkulator.angkaDisplay * -1;
}

// membuat fungsi perhitungan / kalkulasi

function hitungKalkulasi() {
  // jika kondisi angka pertama / operator belum ada
  if (kalkulator.angkaPertama == null || kalkulator.operator == null) {
    alert("masukan angka terlebih dahulu");
    return;
  }

  let hasil = 0;
  if (kalkulator.operator === "+") {
    hasil =
      parseInt(kalkulator.angkaPertama) + parseInt(kalkulator.angkaDisplay);
  } else {
    hasil =
      parseInt(kalkulator.angkaPertama) - parseInt(kalkulator.angkaDisplay);
  }
  kalkulator.angkaDisplay = hasil;
}

function gunakanOperator(operator) {
  if (!kalkulator.tungguAngkaKedua) {
    kalkulator.operator = operator;
    kalkulator.tungguAngkaKedua = true;
    kalkulator.angkaPertama = kalkulator.angkaDisplay;

    //mengatur ulang nilai angka display supaya button selanjutnya di mulai dari angka pertama lagi
    kalkulator.angkaDisplay = "0";
  } else {
    alert("operator sudah ditetapkan");
  }
}

//memilih elemen button dalam kalkulator.html
const buttons = document.querySelectorAll(".button");

//looping buttons dengan fungsi setiap button;

for (let button of buttons) {
  button.addEventListener("click", function (event) {
    //mendapatkan objek elemen yang diklik
    const target = event.target;

    //jika button clear kalkulator diklik
    if (target.classList.contains("clear")) {
      resetKalkulator();
      updateDisplay();
      return;
    }

    //jika button -/+ diklik menghasilkan input angka negatif atau positif

    if (target.classList.contains("negative")) {
      inverseAngka();
      updateDisplay();
      return;
    }

    // jika button sama dengan = atau sama dengan diklik untuk menampilkan hasil perhitungan

    if (target.classList.contains("equals")) {
      hitungKalkulasi();
      updateDisplay();
      return;
    }

    // jika target button operator +, -, *, /diklik
    if (target.classList.contains("operator")) {
      gunakanOperator(target.innerText);
      return;
    }

    //masukan angka
    inputDigit(target.innerText);
    updateDisplay();
  });
}
