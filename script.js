// spread -> ... (nesne veya diziyi yayar, unpack hale getirir.)
// rest -> (pack haline getirir.)
// 3 dots syntax, kullanıldığı yere göre anlam kazanır.

const names = ["Name1", "Name2", "Name3", "Name4", "Name5", "Name6"];

function getName(name1, name2, name3, name4) {
  console.log(name1);
  console.log(name2);
  console.log(name3);
  console.log(name4);
}
getName(names[0], names[1], names[2], names[3]); // diziyi elle açıyoruz (tek tek açar)
getName([...names]); // diziyi spread ile açıyoruz. (tek tek açar ama dizi kapsayıcısı olduğundan bunları diziye dönüştürür.)

// getName(names[0], names[1], names[2], names[3]) = getName(...names)

function getNameRest(name1, name2, ...otherNames) {
  // rest olduğu için 2. bir 3 dot syntax ile ...otherNames2 yapamayız..
  console.log(name1);
  console.log(name2);
  console.log(otherNames);
}

getNameRest(names[0], names[1], names[2], names[3], names[4], names[5]);

/// NESNE ÜRETME İŞLEMLERİ VE FARKLILIKLAR \\\
const person = {
  name: "John",
  surname: "Smith",
};

const newPerson = person;
person.surname = "Travolta";

console.log(person);
console.log(newPerson);

// bu şekilde kullanımda referans şeklinde alır ve newPerson üzerindeki değişiklik person'u etkiler.

const person2 = {
  name: "John",
  surname: "Smith",
};

const newPerson2 = {
  ...person2,
};
person2.surname = "Travolta";

console.log(person2);
console.log(newPerson2);

// referanssız alır ve farklılık olur.

/// DEFAULT DEĞERLERE SAHİP NESNE ÜZERİNDE İŞLEM YAPMAK \\\
function myRequest(anotherOptions = {}) {
  const options = {
    showErrors: false,
    showSuccess: false,
    ...anotherOptions,
  };
  // başlangıç değeri veriyoruz ama bu değerleri değiştirmek istediğimiz zaman sonradan gönderilecek bir parametre
  // buradakiyle aynı isimdeyse default değeri ezecek. bu tarz yapılarda rest kullanımı yapılıyor.
  console.log(anotherOptions);
}
myRequest();
myRequest({ showErrors: true });
myRequest({ showSuccess: true });

/// BİR DİZİYE VEYA NESNEYE EKLEME YAPMAK \\\

const city = {
  name: "Kocaeli",
  region: "Marmara",
};

console.log({ ...city, plaka: 41 });
console.log({ plaka: 41, ...city });

const nums = [12, 23, 35, 41, 54, 81];

console.log([6, ...nums, 82]);
console.log([6, nums, 82]);
console.log([6, [7, ...nums, 82], 85]);

console.log([...nums, 92]);
console.log([[3, ...nums], 92]);
console.log([nums, 92]);

console.log([1, ...nums]);
console.log([1, [2, ...nums, 100]]);
console.log([1, nums]);

/// NODE(HTML Üzerinden alınan) VERİLER İLE ÇALIŞMA \\\

const titles = document.querySelectorAll("h3");

console.log(titles);

console.log(typeof titles); // Direkt olarak HTML nesnelerini döndürür.

/// Spread ile nodeList'i arraye çevirip high-order fonksiyonları kullanabiliriz.
[...titles].map((title) => {
  console.log(title);
});

/// DİZİ BİRLEŞTİRME \\\

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];

const arr3 = [...arr1, ...arr2];

console.log(arr3);

/// MATEMATİKSEL İŞLEMLER \\\

function sum(x, y, z) {
  return x + y + z;
}

const numbersForSum = [1, 2, 3];

console.log(sum(...numbersForSum));
