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
const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (const potion of this.potions) {
      if (potion === newPotion) {
        return `Error! Potion ${newPotion} is already in your inventory!`;
      }
    }
    return this.potions.push({ newPotion });
  },
  removePotion(potionName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      if (potionName === this.potions[i]) {
        this.potions.splice(i, 1);
      }
    }
    return `Potion ${potionName} is not in inventory!`;
  },
  updatePotionName(oldName, newName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      if (oldName === this.potions[i]) {
        this.potions.splice(i, 1, newName);
      }
    }
  },
};
