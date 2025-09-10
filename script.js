let userName = "Didora";
let age = 16;
let city = "Khorugh";

console.log(`My name is ${userName}, I am ${age} year, I am from ${city} city`);

if (age >=18){
    console.log("Sovershennoletniy");
} else{
    console.log("Nesovershennoletniy");
}

function greet(name){
    console.log(`Welcome, ${name}`);
    
}

greet("Didora");

function miltiply(a, b){
    return a*b;
}
console.log(miltiply(10, 20));

for(let i=1; i<=10; i++){
    if(i%2===0){
        console.log(`${i}-chotnoe`);
    }else{
        console.log(`${i}-nechotnoe`);
    }
}


