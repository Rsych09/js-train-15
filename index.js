// Завдання 1
/**
 * Функція `generateRandomPassword` генерує випадковий пароль заданої довжини.
 *
 * length - довжина пароля.
 *
 * Повертає випадковий пароль.
 */
// Завдання 1 - Генерація випадкового пароля
function generateRandomPassword(length) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

console.log("Завдання 1 ==============================");
console.log(generateRandomPassword(8));

// Завдання 2 - Обчислення площі кола
function calculateCircleArea(radius) {
  if (typeof radius !== 'number') {
    console.error("Помилка: Радіус має бути числом.");
    return null;
  }
  const area = Math.PI * Math.pow(radius, 2);
  return area;
}

console.log("Завдання 2 ==============================");
console.log(calculateCircleArea(5));

// Завдання 3 - Пошук мінімального та максимального чисел у масиві
function findMinMax(numbers) {
  if (!Array.isArray(numbers)) {
    console.error("Помилка: Передане значення не є масивом.");
    return null;
  }
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  return { min, max };
}

console.log("Завдання 3 ==============================");
console.log(findMinMax([5, 2, 9, 1, 5, 6, 7, 8]));

// Виведе об'єкт, що містить мінімальне (1) та максимальне (9) числа.

// Завдання 4
/**
 * Функція `calculateHypotenuse` обчислює довжину гіпотенузи прямокутного трикутника за довжинами його катетів.
 *
 *  a - Довжина першого катета.
 *  b - Довжина другого катета.
 * Поверне: Довжину гіпотенузи.
 */
// Завдання 4 - Обчислення довжини гіпотенузи
function calculateHypotenuse(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    console.error("Помилка: Катети мають бути числами.");
    return null;
  }
  const hypotenuse = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
  return hypotenuse;
}

console.log("Завдання 4 ==============================");
console.log(calculateHypotenuse(3, 4));

// Завдання 5 - Заокруглення значень числових властивостей об'єкта
function roundObjectValues(obj) {
  if (typeof obj !== 'object' || obj === null) {
    console.error("Помилка: аргумент має бути об'єктом.");
    return null;
  }
  const entries = Object.entries(obj);
  const roundedEntries = entries.map(([key, value]) => {
    if (typeof value === 'number') {
      return [key, Math.round(value)];
    }
    return [key, value];
  });
  return Object.fromEntries(roundedEntries);
}

console.log("Завдання 5 ==============================");
const myObject = {
  a: 3.5,
  b: 2.2,
  c: "not a number",
  d: 4.9,
};
console.log(roundObjectValues(myObject));

// Завдання 6 - Обчислення об'єму циліндра
function calculateVolumeCylinder(radius, height) {
  if (typeof radius !== 'number' || typeof height !== 'number') {
    console.error("Помилка: Радіус і висота мають бути числами.");
    return null;
  }
  const volume = Math.PI * Math.pow(radius, 2) * height;
  return Math.floor(volume);
}

console.log("Завдання 6 ==============================");
console.log(calculateVolumeCylinder(3, 5));

// Виведе 142

// Завдання 7
/**
 * Функція `sumPositiveNumbers` обчислює суму додатніх чисел у масиві.
 *
 * numbers - масив чисел.
 * Поверне: Сума додатніх чисел.
 */
// Завдання 7 - Сума додатніх чисел у масиві
function sumPositiveNumbers(numbers) {
  if (!Array.isArray(numbers)) {
    console.error("Помилка: аргумент має бути масивом чисел.");
    return null;
  }
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (Math.sign(numbers[i]) === 1) {
      sum += numbers[i];
    }
  }
  return sum;
}

console.log("Завдання 7 ==============================");
console.log(sumPositiveNumbers([-5, 3, 2, -1, 7, -6]));

// Завдання 8 - Виведення дробової частини числа
function getFractionalPart(num) {
  if (typeof num !== 'number') {
    console.error("Помилка: вхідний аргумент має бути числом.");
    return null;
  }
  const roundedNum = Math.trunc(num);
  const fractionalPart = num - roundedNum;
  const roundedFractionalPart = parseFloat(fractionalPart.toFixed(15));
  return roundedFractionalPart;
}

console.log("Завдання 8 ==============================");
console.log(getFractionalPart(12.34567));

// Завдання 9 - Порівняння чисел та округлення найбільшого числа
function compareAndRound(num1, num2) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    console.error("Помилка: обидва аргументи мають бути числами.");
    return null;
  }
  const maxNumber = Math.max(num1, num2);
  const roundedMaxNumber = Math.round(maxNumber);
  return roundedMaxNumber;
}

console.log("Завдання 9 ==============================");
console.log(compareAndRound(13.4, 15.7));

// Виведе 16.

// Завдання 10
/**
 * Функція `estimateInvestment` оцінює прибуток від інвестицій з фіксованою річною процентною ставкою за задану кількість років.
 *
 *  principal - Початкова сума інвестицій.
 *  interestRate - Річна процентна ставка в десяткових дробах (наприклад, 5% = 0.05).
 *  years - Кількість років.
 *  Поверне: Оцінку суми прибутку від інвестицій.
 */
// Завдання 10 - Оцінка прибутку від інвестицій
function estimateInvestment(principal, interestRate, years) {
  if (typeof principal !== 'number' || typeof interestRate !== 'number' || typeof years !== 'number') {
    console.error("Помилка: всі аргументи мають бути числами.");
    return null;
  }
  const estimatedAmount = principal * Math.pow((1 + interestRate), years);
  return Math.round(estimatedAmount);
}

console.log("Завдання 10 ==============================");
console.log(estimateInvestment(1000, 0.05, 5));

// Завдання 11 - Перевірка перевищення максимальної суми
function isTotalPriceExceedsMaxPrice(products, maxPrice) {
  if (!Array.isArray(products)) {
    console.error("Помилка: перший аргумент має бути масивом об'єктів.");
    return null;
  }
  if (typeof maxPrice !== 'number') {
    console.error("Помилка: другий аргумент має бути числом.");
    return null;
  }
  const totalPrice = products.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0);
  const convertedTotalPrice = Math.fround(totalPrice);
  const convertedMaxPrice = Math.fround(maxPrice);
  return convertedTotalPrice > convertedMaxPrice;
}

console.log("Завдання 11 ==============================");
let products = [
  { title: "Product 1", price: 0.4 },
  { title: "Product 2", price: 0.23 },
  { title: "Product 3", price: 0.109 },
  { title: "Product 4", price: 0.7564 },
  { title: "Product 5", price: 0.33456 },
  { title: "Product 6", price: 0.897654 },
];
let maxPrice = 3.567894;
console.log(isTotalPriceExceedsMaxPrice(products, maxPrice));

// Виведе: false
