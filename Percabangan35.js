let bil= prompt("Masukan angka ganjil :");    

if (bil%3==0  && bil%5==0){
    console.log("Hello World");
}else if(bil%5==0){
    console.log("World");
}else if(bil%3==0){
    console.log("Hello");
}else {
    console.log("data harus angka ganjil");
}

