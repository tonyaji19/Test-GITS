

const balikan = kata => kata
.split('') //untuk membagi string menjadi array substring dan mengembalikan array baru tanpa mengubah string asli.
.map(
    (huruf, indeks) => kata[kata.length-(1+indeks)]
)
.join('') //method yang digunakan untuk menggabungkan seluruh array menjadi sebuah string.

//input kata/kalimat
console.log(balikan("Tony Aji Palguno"));
console.log(balikan("Kotak"));