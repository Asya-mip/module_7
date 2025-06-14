//МОДУЛЬ 7

//Задание 7.7.1
//----------------------------------------------

function printInfo(){
    console.log(`Name: ${this.name}, Age: ${this.age}`);
}

person = {
    name: "Anastasia",
    age: 23
};

printInfo.call(person);


//Задание 7.7.2
//----------------------------------------------

// function calculate (a, b, operator){
//     switch (operator){
//         case '+':
//             return a + b;
//         case '-':
//             return a - b;
//         case '*':
//             return a * b;
//         case '/':
//             return a / b;
//     }
// }

// const argsArray = [2, 3, "+"];
// console.log(calculate.apply({}, argsArray));


//Задание 7.7.3
//----------------------------------------------

// const user1 = {name: "Shrek", age: 31};
// const user2 = {name: "Fiona", age: 30};
// const user3 = {name: "Donkey", age: 15};

// const users = [user1, user2, user3];

// const filterUsersAge = users.filter((user) => {
//     return user.age >= 18;
// })
// console.log(filterUsersAge);

// const mapUsersName = users.map((user) => {
//     return user.name;
// })
// console.log(mapUsersName);


//Задание 7.7.4
//----------------------------------------------

// person = {
//     fullName: "Anastasia",
//     age: 23
// };

// function setFullName(fullName){
//     this.fullName = fullName;
// }

// let setPersonFullName = setFullName.bind(person);
// setPersonFullName("John Smith");
// console.log(person);


//Задание 7.7.5
//----------------------------------------------

// function sortArray(array){
//     const setArray = new Set(array);
//     const uniqueArray = Array.from(setArray);
//     uniqueArray.sort((a, b) => a - b);
//     return uniqueArray;
// }

// const numbers = [1, 5, 4, 3, 6, 9, 4, 0, 5];
// const sortNumbers = sortArray(numbers);
// console.log(sortNumbers);