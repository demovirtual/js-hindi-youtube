//console.log(2 > 1);
//console.log(2 >= 1);
//console.log(2 < 1);
//console.log(2 == 1);
//console.log(2 != 1);

//console.log("2" > 1);
//console.log("02" > 1);

//The reason is that an equality check == and comparisons > < >= <= work differently.
//Comparisons convert null to a number, traeting it as 0.
//That's why (3) null >= 0 is true and (1) null > 0 is false

//console.log(null > 0);
//console.log(null == 0);
//console.log(null >= 0);

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);

// strict check

// ===     first of all  check data type then check comparision.

console.log("2" == 2);
console.log("2" === 2);