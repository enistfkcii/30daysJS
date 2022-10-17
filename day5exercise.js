const array = []
const array2 = [1,3,5,7,8,2]
console.log(array2.length)
console.log(array2[0],array2[2],array2[5])
let mixedDataTypes = ["string",5,true,undefined]
console.log(mixedDataTypes.length)
let company = ["Facebook","Google","Microsoft","Apple","IBM","Oracle"]
console.log(`${company.join(',')} and ${company[6]} are big IT companies`)
company.includes("Facebook1") ? console.log(company[0]) : console.log("Boyle bir şirket bulunamadı")
console.log(company.sort())
console.log(company.reverse())