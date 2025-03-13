//Task 1
console.log("Variant №15");
console.log("Task 1");

let x_1 = 2; // x_1 змінна_номер завдання
let y_1 = 2; // y_1 змінна_номер завдання 
let z_1 = 1; // z_1 змінна_номер завдання

let condition_1 = (x_1 - y_1) <= (z_1 + 2); /* condition_1 / умова_№1 */
console.log(condition_1);

let condition_2 = x_1 <= Math.abs(z_1); /*  condition_2 / умова_№2 */
console.log(condition_2);

let result = condition_1 && condition_2;
console.log(result);

//Task 2
console.log("Task 2");

let y_2 = 0.3 * (Math.log(Math.exp(-2.3)) / Math.log(5));

let z_2 = Math.sqrt(Math.abs(y_2 + Math.pow(Math.sin(y_2), 2)));

let x_2 = Math.acos((Math.PI - z_2) / 3) + Math.E;

console.log("y =", + y_2);
console.log("z =", + z_2);
console.log("x =", + x_2);

//Task 3
console.log("Task 3");

let x_3 = 10;
let y_3;

if(Math.abs(x_3) >= 5){
	y_3 = Math.pow(2, (3 * x_3 - 1)) * Math.pow(x_3 , 2);
	} 
else if(0 < Math.abs(x_3) && Math.abs(x_3) < 1){
	y_3 = Math.log(Math.abs(x_3)) ** -1;
	} 
else if(1 < Math.abs(x_3) && Math.abs(x_3) < 5){
	y_3 = Math.cos(Math.abs(x_3) - 1);
	}
console.log('y =' + y_3);

//Task 4
console.log("Task 4.1");
console.log("Task 4.1 (a)");
for (let x_4 = -1; x_4 <= 1; x_4 += 0.25) {
    let y_4 = (2 * Math.pow(Math.sin(x_4), 3)) / (3 * Math.abs(x_4) + 1);
	console.log('y =' + y_4);
}

console.log("Task 4.1 (b)");
let x_4b = -2.5;
for (let i = 0; i < 6; i++) {
    let y_4b = (2 * Math.pow(Math.sin(x_4b), 3)) / (3 * Math.abs(x_4b) + 1);
	x_4b += 0.15;
    console.log('y =' + y_4b);
}
//Task 5
console.log("Task 5.1 (a)");
let sum = 0;

for (let l = 5; l <= 32; l++) {
    sum += Math.pow(-1, 7 - 1) * ((Math.pow(l, 3) + 3) / (Math.pow(l, 2) + 3 * l + 7));
}
console.log("Сума :", sum);

console.log("Task 5.1 (b)");
let i = 2;
let P = 1;

for (let n = i; n <= 7; n++) {
    P *= n / ((n + 3) * (n + 8));
}
console.log("Добуток P:", P);
