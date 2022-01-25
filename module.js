// const price = prompt('Enter check Number, please!');
// const formatedPrice = Number.parseFloat(price);
// console.log(price);

// const tip = prompt('Enter your tip, please');
// const formatedTip = Number.parseFloat(tip);
// console.log(tip);

// const tipAmount = Number(((formatedPrice * formatedTip) / 100).toFixed(2));
// console.log('tipAmount');

// const totalSum = (formatedPrice + tipAmount).toFixed(2);

// //const message = `You need to pay ${totalSum}! Hope you enjoy your meal!`;
// const message = `Check number: ${formatedPrice}/nTip: ${formatedTip}%/nTip amount: ${tipAmount}/nTotal Sum: $(totalSum)`;

// alert(message);

//-------------------------------------------

// function isAdult(age) {
//   // Change code below this line
//   const passed = isAdult >= 18;

//   // Change code above this line
//   return passed;
// }

// isAdult(20);

// if (word === null || word.trim() === '') {
//   alert('Invalid value');
// } else {
//   const wordLength = word.length;
//   if (wordLength % 2 === 0) {
//     const firstIndex = wordLength / 2 - 1;
//     const lastIntex = wordLength / 2 + 1;

//     console.log(word.slice(firstIndex, lastIntex));
//   }
// }

// function getDiscount(totalSpent) {
//   let discount;

//   if (totalSpent < 5000) {
//     const BASE_DISCOUNT = 0;
//   } else if (totalSpent >= 5000 && totalSpent < 20000) {
//     const BRONZE_DISCOUNT = 0.02;
//   } else if (totalSpent >= 20000 && totalSpent < 50000) {
//     const SILVER_DISCOUNT = 0.05;
//   } else if (totalSpent >= 50000) {
//     const GOLD_DISCOUNT = 0.1;
//   }

//   return discount;
// }

// const message = 'Hello Word';
// const pricePerWord = 20;

// function calculateEngravingPrice(message, pricePerWord) {
//   let word = message.split('');
//   let result = word * pricePerWord;

//   return result;
// }

// const words = ['JavaScript', 'это', 'интересно'];
// console.log(words.join(''));
// const title = ['fdk bhk, cf he sgh'];
// console.log(title.join(''));

// function slugify(title) {
//   // Change code below this line

//   let slug = title.join('-');
//   console.log(slug);
//
// }
// ----------------------------------------
// function makeArray(firstArray, secondArray, maxLength) {
//
//   let newArray = firstArray.concat(secondArray);
//   if (newArray.length <= maxLength) {
//     return newArray;
//   }
//   if (newArray.length > maxLength) {
//     return newArray.slice(0, maxLength);
//
//   }
// }

// const firstArray = [1, 2, 3];
// const secondArray = [4, 5, 6];

// console.log(newArray);

// function calculateTotal(number) {
//   let result = 0;
//   for (i = 0; i <= number; i += 1) {
//     result += i;
//   }
//   return result;
// }

// calculateTotal(3);

// const stringSplit = string.split(' ');
// let longestWord = '';

// for (const word of stringSplit) {
//   if (word.length > longestWord.length) {
//     longestWord = word;
//   }
// }
// return longestWord;
//-------------------------------------------------------------

// function filterArray(numbers, value) {
//   let res = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     numbers[i] > value ? res.push(numbers[i]) : '';
//   }
//   return res;
// }

//-------------------------------------------------------------
// const newArr = array1.concat(array2);
// for (let i = 0; i < newArr.length; i += 1) {
//   newArr[i] === newArr[i];

//   let i = start;
//   i < end;
//   i = +1;
// }
