const name = ["Brijesh", "Jay", "Amisha"]
console.log(name);

const sname = ["Parmar", "Machhi", "Gandhi"]
console.log(sname);

const fname = [...name, ...sname]
console.log(fname);

const fnewname = name.concat(sname)
console.log(fnewname);


console.log(Array.from("BRIJESH"));

console.log(Array.isArray("BRIJESH"));

let s1 = 100
let s2= 200
let s3 = 300
console.log(Array.of(s1, s2, s3));
