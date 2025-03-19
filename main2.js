console.log("Variant №15")

//Task 1.4
console.log("Task 1");
console.log("Task 4.1");
function calcTask4Value(x){
    return (2 * Math.pow(Math.sin(x), 3)) / (3 * Math.abs(x) + 1);
}
for (let x = -1; x <= 1; x += 0.25) {
    let y = calcTask4Value(x);
	console.log('y = ' + y);
}
console.log("Task 4.2");
let x = -2.5;
for (let i = 0; i < 6; i++) {
    let y = calcTask4Value(x);
	x += 0.15;
    console.log('y = ' + y);
}
//Task 1.5
function calcTask51Value(l){
    return Math.pow(-1, 7 - 1) * ((Math.pow(l, 3) + 3) / (Math.pow(l, 2) + 3 * l + 7));
}
console.log("Task 5.1");
let sum = 0;
for (let l = 5; l <= 32; l++) {
    sum += calcTask51Value(l);
}
console.log("Сума :" + sum);
function calcTask52Value(n){
    return n / ((n + 3) * (n + 8));
}
console.log("Task 5.2");
let i = 2;
let P = 1;
for (let n = i; n <= 7; n++) {
    P *= calcTask52Value(n);
}
console.log("Добуток P:" + P);

//Task 2
console.log("Task 2");
let C = [3.2, 2.2, 1.4, 3.6, 6.3, 1.26];
let numElem = 0;
for (let i = 0; i < C.length; i++) {
    if (C[i] > 2.3) {
        numElem++;

    }
}
console.log("Кількість елементів, більших за 2.3: " + numElem);

//Task 4
console.log("Task 4");
let laptop=[
    {
        Model:"ASUS Vivobook 16X K3605ZF-RP714",
        Processor:"Intel Core i5-12500H",
        graphicsCard:"nVidia GeForce RTX 2050",
 		storageСapacity:"16 ГБ",
 		screenSize:"16"
    },
    {
        Model:"Acer Nitro V 15 ANV15-51-55UE (NH.QQEEU.001)",
        Processor:"Intel Core i5-13420H",
        graphicsCard:"nVidia GeForce RTX 4060",
        storageСapacity:"16 ГБ",
 		screenSize:"15.6"
    },
    {
        Model:"Samsung Galaxy Book4 (NP750XGK-KS2US)",
        Processor:"Intel Core i5-1235U",
        graphicsCard:"Intel Iris Xe Graphics",
        storageСapacity:"8 ГБ",
 		screenSize:"15.6"
    }
];

//Task 5
for (let i=0; i<laptop.length;i++){
 	console.log(`${laptop[i].Model} -  ${laptop[i].Processor} ; ${laptop[i].graphicsCard} ; ${laptop[i].storageСapacity} ; ${laptop[i].screenSize}.`)
}
