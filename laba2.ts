// Одномерные массивы
//1
let data: number[] = [15, -7, 22, 3, 8, -10, 14, 0, -3, 5, 7, 12];
console.log(`Одномерный массив:`);
console.log(data);
function getMedian(arr: number[]): number {
    const sorted = [...arr].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    if (sorted.length % 2 === 0) {
        return (sorted[mid - 1] + sorted[mid]) / 2;
    } else {
        return sorted[mid];
    }
}
const median = getMedian(data);
console.log(`Медианное значение: ${median}`);
//двумерные
// Исходная матрица целых чисел
let matrix = [
    [1, 2, 0],
    [0, 3, 4],
    [5, 0, 6]
];

console.log(`Матрица целых чисел: `);
console.log(matrix);
function countNonZero(matrix: number[][], startRow: number, endRow: number, startCol: number, endCol: number): number {
    let count = 0;
    for (let i = startRow; i <= endRow; i++) 
        {
        for (let j = startCol; j <= endCol; j++) 
            {
            if (matrix[i][j] !== 0) 
                {
                count++;
            }
        }
    }
    return count;
}
const nonZeroCount = countNonZero(matrix, 0, 2, 0, 1);
console.log(`Количество ненулевых значений в заданном отрезке: ${nonZeroCount}`);
//кортежи
let myTuple: [number, string, number] = [5, "Example", 3];
console.log(`Кортеж: `);
console.log(myTuple);
function multiplyNumbersFromTuple(tuple: [number, string, number]): number 
{
    const [num1, , num2] = tuple;  
    return num1 * num2; 
}
const result = multiplyNumbersFromTuple(myTuple);
console.log(`Результат произведения чисел: ${result}`);
//перечисления
enum Vitamin {
    A = "A",
    B3 = "B3",
    B6 = "B6",
    B12 = "B12",
    E = "E"
}
console.log(`Перечисление витаминов: `);
console.log(Vitamin);
console.log(`Выбранный витамин: ${Vitamin.B6}`);
class Pet {
    name: string = 'Some pet'
    age: number = -1
    speak() {
    return "No speak. I am fish!";
    }
    }
    
    class Dog extends Pet {
    label = "AngryHunter";
    age = 8;
    speak() {
    return "Yaw-Gaw!";
    }
    }
    class Cat extends Pet {
    name = 'Barsik';
    age = 2;
    speak() {
    return "Miyau!";
    }
}
    function printPet<T extends Pet>(pet: T): void {
        console.log(`Name: ${pet.name}, Age: ${pet.age}, Speak: ${pet.speak()}`);
    }
    const myDog = new Dog();
    const myCat = new Cat();
    console.log(`Результат выполнения четвёртого задания: `);
    printPet(myDog);
    printPet(myCat);
// Тип для витамина
    type VitaminInfo = {
        name: Vitamin; 
        description: string; 
        source: string[];     
    }
    const vitaminB6: VitaminInfo = {
        name: Vitamin.B6,
        description: "Витамин B6 играет важную роль в метаболизме аминокислот и белков, а также поддерживает нормальное функционирование нервной системы.",
        source: ["Печень", "Картофель", "Бананы", "Курица", "Рыба"]
    };

    // Выводим объект в формате JSON
    console.log(JSON.stringify(vitaminB6, null, 2));






