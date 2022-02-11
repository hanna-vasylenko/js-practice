// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   const resArr = [];
//   for (const product of products) {
//     if (product.hasOwnProperty(propName)) {
//       resArr.push(product[propName]);
//     }
//   }
//   return resArr;

//-----------or---------
//   if (Object.keys(product).includes(propName)){
// resArr.push(product[propName]);
//   }
// }
// return resArr;

// -------------------------------------------------------------------------

//   if (Object.keys(product).includes(propName)){
// resArr.push(product[propName]);
//   }
// }
// return resArr;

// Change code above this line
//}

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += object[key];
//     }
//   }
//   // Change code above this line
//   return propCount;
// }

// countProps({});
// console.log(countProps);
// -----------------------------------------

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   for (const product of products) {
//     if ((productName = product.name)) {
//       return product.price;
//     }
//     return null;
//   }

//   // Change code above this line
// }

// console.log(getProductPrice('Scanner'));

// ----------------------------------------------

//executeforEach([1,2,3], function(el) {console.log(el * 2)}) // 2 4 6

// function executeforEach(array, callback) {
//функция принимает два параметра - массив и колбэк.
//for (const item of array) {
//перебираем массив, каждый его элемент - item;
//callback(item); //вызов функции, которая передана в параметр
//}
//}
// --------------------------------------------------

//написать функцию, которая проверяет входит ли в маасив аргумент переданный в качестве значения.

// const containsValue = (array, value) => {
//   let a = false;
//   array.forEach((item) => {
//     if (item === value) {
//       a = true;
//     }
//   });
//   return a;
// };

// containsValue([2, 5, 8], 2); // returns true
// containsValue([12, 4, 6], 5); // returns false

//console.log(containsValue([2, 5, 8], 2));
//console.log(containsValue([12, 4, 6], 5));
// --------------------------------------------------------

//

// substitute([58, 14, 48, 12, 31, 19, 10]);
// returns [58, '*', 48, '*', 31, '*', 10]
// const substitute = (array) => {
//   return array.map((element) => {
//     if (element < 20 && element > 10) {
//       return '*';
//     }
//     return element;
//   });
// };

//или
// const substitute = (array) => array.map((element) => (element < 20 && element > 10 ? '*' : element));

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price * product.quantity;
//     }
//   }
//   return 0;
//   // Пиши код выше этой строки
// }

// console.log(calculateTotalPrice('Blaster'));
// console.log(calculateTotalPrice('Droid'));
// --------------------------------------------------------------
// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },

//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       if (potionName === this.potions[i].name) {
//         this.potions.splice(i, 1);
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },

//   updatePotionName(oldName, newName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       if (oldName === this.potions[i].name) {
//         this.potions.splice(i, 1, newName);
//       }
//     }
//   },
// };
// ---------------------------------------------------------------------------
// Write a function - positiveSum:
// It should accept an array of numbers and return a result of their addition.
//But you must calculate only positive numbers and omit negative if any presents.
// For example:
// positiveSum([2, 4, 6, 8])   // => 20
// positiveSum([0, -3, 5, 7])  // => 12

// const positiveSum = (array) => {
//   const newArr = array.filter((item) => item >= 0);

//   return newArr.reduce((sum, arg) => {
//     return sum + arg;
//   }, 0);
// };

// console.log(positiveSum([2, 4, 6, 8])); // => 20
// console.log(positiveSum([0, -3, 5, 7])); // => 12

//или методом reduce:

// const positiveSum = (args) => {
//   return args.reduce((total, element) => {
//     if (element >= 0) {
//       return total + element;
//     }
//     return total;
//   }, 0);
// };

//или сокращенно:

// const positiveSum = (args) =>
//   args.reduce((total, element) => (element >= 0 ? total + element : total), 0);

// --------------------------------------------------------------
// Write a function – letterCount
// It accepts two string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.
// If no occurrences can be found, a count of 0 should be returned.
// For example:
// letterCount("Maggy", "g") // => 2
// letterCount("Barry", "b") // => 1
// letterCount("", "z")      // => 0

// const letterCount = (string1, string2) => {
//   const firstArray = [...string1.toLowerCase()];
//   const secondString = string2.toLowerCase();
//   return firstArray.filter((element) => element === secondString).length;
// };
// сокращенный
// const letterCount = (str, s) => {
//   const ls = s.toLowerCase();
//   return str
//     .toLowerCase()
//     .split('')
//     .filter((el) => el === ls).length;
// };

// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Имитируем доступеность абонента случайным числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`Соединяем с ${name}, ожидайте...`);
//   // Логика принятия звонка
// }

// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступен, оставьте сообщение.`);
//   // Логика активации автоответчика
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступен, записываем голограмму.`);
//   // Логика записи голограммы
// }
// const student = {
//   name: 'Mango',
//   email: 'mango@mail.com',
//   hwResults: [
//     {
//       topic: 'HTML',
//       success: true,
//     },
//     {
//       topic: 'CSS',
//       success: true,
//     },
//     {
//       topic: 'JavaScript',
//       success: false,
//     },
//   ],
//   getName() {
//     return this.name;
//   },
//   getEmail() {
//     return this.email;
//   },
//   getHwResults() {
//     return this.hwResults;
//   },
//   addHwResult(topic, success) {
//     this.hwResults.push({ topic, success });
//   },
// };

// class Student {
//   #name;
//   #email;
//   #hwResults = [];
//   constructor({ name, email }) {
//     this.#name = name;
//     this.#email = email;
//   }
//   getName() {
//     return this.#name;
//   }
//   getEmail() {
//     return this.#email;
//   }
//   getHwResults() {
//     return this.#hwResults;
//   }
//   addHwResult(topic, success) {
//     this.#hwResults.push({ topic, success });
//   }
// }

// const mango = new Student({ name: 'Mango', email: 'email' });
// console.log(mango);

// console.log(mango.getName());
// mango.addHwResult('CSS', true);
// console.log(mango.getHwResults());

const Student = function (name, email) {
  const hwResults = [];
  //   this.name = name;
  //   this.email = email;
  this.getName = function () {
    return name;
  };
  this.getEmail = function () {
    return email;
  };
  this.getHwResults = function () {
    return hwResults;
  };
  this.addHwResult = function (topic, success) {
    hwResults.push({ topic, success });
  };
};
// const poly = new Student('Poly', 'email');
// console.log(poly);
// console.log(poly.getEmail());
// console.log(poly.getName());
// poly.addHwResult('HTML', true);
// console.log(poly.getHwResults());

const listOfStudents = [
  {
    name: 'John',
    email: 'john@gmail.com',
  },
  {
    name: 'Jane',
    email: 'jane@gmail.com',
  },
  {
    name: 'Jack',
    email: 'jack@gmail.com',
  },
  {
    name: 'Mary',
    email: 'mary@gmail.com',
  },
  {
    name: 'Robert',
    email: 'robert@gmail.com',
  },
  {
    name: 'Ann',
    email: 'ann@gmail.com',
  },
  {
    name: 'Brad',
    email: 'brad@gmail.com',
  },
  {
    name: 'Lisa',
    email: 'lisa@gmail.com',
  },
  {
    name: 'Matthew',
    email: 'matthew@gmail.com',
  },
  {
    name: 'Sandra',
    email: 'sandra@gmail.com',
  },
];

const FrontendSchool = function (students) {
  const superStudents = students.map(
    ({ name, email }) => new Student(name, email)
  );
  this.printStudentsList = function () {
    console.log();
  };
};
