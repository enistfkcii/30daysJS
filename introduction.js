// console.log("bu yazı introduction.js den geldi")
// console.log(typeof true)
// console.log(typeof 1)
// console.log(typeof 1.7)
// console.log(typeof 'enis')
// console.log(typeof null)
// /* Degişken tanımlarken sadece $ ve _ özel ifadeleri kullanabiliriyoruz.
// ayrıca sayı ile başlayamıyoruz tanımlama yapmaya.*/
// let $name = "Naim Enis Tüfekçi",
//  _age = 25,
//  job = "Computer Engineering",
//  favFootballTeam = "Galatasaray",
//  married = false;
// const pi = 3.14

// console.log("İsmi:",$name,"Yaşı:",_age,"İşi:",job,"Takımı:",favFootballTeam,"Evli mi?:",married)
// const case1 = 4<3 || 2>1
// const case2 = 7<1 && 1>0
// console.log(case1)
// console.log(case1&&case2)
// console.log(case1||case2)
// let yagmurluHava = false
// yagmurluHava ? console.log("Hava bugün yağmurlu") :
// console.log("Bugün hava açık")
// const date = new Date()
// console.log(date)

// let value = prompt("Bir deger giriniz")
// if(value > 5) {
//     console.log("Bu sayı 5 den büyük")
// }
// else if(value <5 ){
//     console.log("Bu sayı 5 den küçük")
// }
// else{
//     console.log("Bu sayı 5")
// }
// let age = prompt("Yaş giriniz")
// switch(age){
//     case '10' :
//         console.log("Girilen sayı 10")
//         break
//     case '12' :
//         console.log("Girilen sayı 12")
//         break
//     case '15' :
//         console.log("Girilen sayı 15")
//         break
//     default :
//         console.log("Girilen sayı tanınmıyor")
// }
let value = prompt("İsim giriniz")
value.length >= 5 ? console.log("Geçerli bir isim") : console.log("En az 5 karakterden oluşan bir isim giriniz")
