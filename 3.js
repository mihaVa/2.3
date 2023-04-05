const path = require('path');

// Отримання шляху з аргументів командного рядка
const pathArg = process.argv[2];

// Отримання повного шляху
const fullPath = path.resolve(pathArg);

// Отримання імені файлу та розширення
const { name, ext } = path.parse(fullPath);

// Визначення сімейства операційних систем
const osFamily = process.platform === 'win32' ? 'Windows' : 'Unix';

// Виведення результатів на екран
console.log(`Повний шлях: ${fullPath}`);
console.log(`Ім'я файлу: ${name}`);
console.log(`Розширення: ${ext}`);
console.log(`Сімейство ОС: ${osFamily}`);