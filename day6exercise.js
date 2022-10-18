const countries = [
    "Albania",
    "Bolivia",
    "Canada",
    "Denmark",
    "Ethiopia",
    "Finland",
    "Germany",
    "Hungary",
    "Ireland",
    "Japan",
    "Kenya"
]
const webTechs = [
    "HTML",
    "CSS",
    "JS",
    "REACT",
    "REDUX",
    "NODE",
    "MONGO"
]
const mernStach = ["MongoDB","Express","React","Node"]

// for(let i=0; i<=10; i++){
//     console.log(countries)
//     console.log(webTechs)
//     console.log(mernStach)
// }
// for(let i=10; i>=0; i--){
//     console.log(countries)
//     console.log(webTechs)
//     console.log(mernStach)
// }
// let i=0;
// let j=10;
// // while( i <= 10){
// //     console.log(countries)
// //     i++
// // }
// while( j > 0){
//     console.log(countries[j])
//     i--;
// }
// harfler = ''
// let harf = '#'
// for(let i=0; i<7; i++){
//     harfler+=harf;
//     console.log(harfler)
// }
// for(let i=0; i<=10;i++){
//     console.log(`${i} x ${i} = ${i*i}`)
// }
// for(let i=0; i<=10;i++){
//     console.log(`${i} ${i*i} ${i*i*i}`)
// }
// for(let i=0;i<=100;i++){
//     if(i%2 == 0){
//         console.log(i)
//     }
// }
// for(let i=0;i<=100;i++){
//     if(i%2 == 1){
//         console.log(i)
//     }
// }
// let asal
// for(let i=0;i<=100;i++){
//     for(let j=2;j<=100;j++){
//         if(i%j != 0){
//             asal = j;
//         }
//     }
//     console.log(asal)
// }
// let sum = 0
// for(let i=0;i<=100;i++){
//     sum+=i
// }
// console.log(sum)
// let sumEven = 0 , sumOdd = 0
// for(let i=0;i<=100;i++){
//     if(i%2 == 0){
//         sumEven+=i
//     }
//     else{
//         sumOdd+=i
//     }
// }
// console.log(`Tek sayıların toplamı :${sumOdd}iken çift sayıların toplamı :${sumEven}`)
// let dizi = []
// dizi.push(sumEven,sumOdd)
// console.log(dizi)
// let a
// for(let i=0;i<5;i++){
// a=Math.random()
// console.log(Math.ceil(a*10))
// }
//Rastgele sayilarla kod oluşturmak.
// let sayiVeHarfler =["1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","y","x","z","m","s"]
// let result = ''
// const characterLength = sayiVeHarfler.length
// for(let i=0;i<5;i++){
//     result += sayiVeHarfler[(Math.floor(Math.random()*sayiVeHarfler.length))]
// }
// console.log(result)
//# ile başlayan renk kodları üreten algoritma
// let sayiVeHarfler =["1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","y","x","z","m","s"]
// let result = '#'
// const characterLength = sayiVeHarfler.length
// for(let i=0;i<5;i++){
//     result += sayiVeHarfler[(Math.floor(Math.random()*sayiVeHarfler.length))]
// }
// console.log(result)
// for(let i=0;i<countries.length;i++){
//     countries[i] = countries[i].toUpperCase()
// }
// console.log(countries)
// let lengths = []
// for(let i=0;i<countries.length;i++){
//     lengths[i] = countries[i].length
// }
// console.log(lengths)
// let landCountry = []
// for(let i=0;i<countries.length;i++){
//     if(countries[i].includes('land')){
//         landCountry.push(countries[i])
//     }
// }
// console.log(landCountry)
// let biggestCountry = ''
// for(let i=0;i<countries.length;i++){
//     if(countries[i].length < countries[i+1].length){
//         biggestCountry = countries[i+1]
//     }
// }
// console.log(biggestCountry)
