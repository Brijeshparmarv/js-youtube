const myarr = [1,2,3,4,5,6]
//console.log(myarr)

//console.log(myarr[6]);
myarr.push(7)
myarr.pop()
myarr.unshift(17)
myarr.shift()

//console.log(myarr.indexOf(3));

//console.log(myarr);
const newarr = myarr.join();
//console.log(newarr);
//console.log(typeof newarr);

// slice , splice

console.log("A", myarr);
const myn1 = myarr.slice(1,3);
console.log(myn1);
console.log("B", myn1);


const myn2 = myarr.splice(1,3);
console.log(myn2);

