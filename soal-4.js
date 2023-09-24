function terbilang(bilangan) {
  bilangan = String(bilangan);
  let angka = new Array(
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0"
  );
  let kata = new Array(
    "",
    "Satu",
    "Dua",
    "Tiga",
    "Empat",
    "Lima",
    "Enam",
    "Tujuh",
    "Delapan",
    "Sembilan"
  );
  let tingkat = new Array("", "Ribu", "Juta", "Milyar", "Triliun");

  let panjang_bilangan = bilangan.length;
  let kalimat = (subkalimat = kata1 = kata2 = kata3 = "");
  let i = (j = 0);

  if (panjang_bilangan > 15) {
    kalimat = "Diluar Batas";
    return kalimat;
  }

  for (i = 1; i <= panjang_bilangan; i++) {
    angka[i] = bilangan.substr(-i, 1);
  }

  i = 1;
  j = 0;
  kalimat = "";

  while (i <= panjang_bilangan) {
    subkalimat = "";
    kata1 = "";
    kata2 = "";
    kata3 = "";

    if (angka[i + 2] != "0") {
      if (angka[i + 2] == "1") {
        kata1 = "Seratus";
      } else {
        kata1 = kata[angka[i + 2]] + " Ratus";
      }
    }

    if (angka[i + 1] != "0") {
      if (angka[i + 1] == "1") {
        if (angka[i] == "0") {
          kata2 = "Sepuluh";
        } else if (angka[i] == "1") {
          kata2 = "Sebelas";
        } else {
          kata2 = kata[angka[i]] + " Belas";
        }
      } else {
        kata2 = kata[angka[i + 1]] + " Puluh";
      }
    }

    if (angka[i] != "0") {
      if (angka[i + 1] != "1") {
        kata3 = kata[angka[i]];
      }
    }

    if (angka[i] != "0" || angka[i + 1] != "0" || angka[i + 2] != "0") {
      subkalimat = kata1 + " " + kata2 + " " + kata3 + " " + tingkat[j] + " ";
    }

    kalimat = subkalimat + kalimat;
    i = i + 3;
    j = j + 1;
  }

  if (angka[5] == "0" && angka[6] == "0") {
    kalimat = kalimat.replace("Satu Ribu", "Seribu");
  }

  return kalimat.trim().replace(/\s{2,}/g, " ");
}

console.log(terbilang(2500));
