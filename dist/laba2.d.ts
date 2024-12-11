declare let data: number[];
declare function getMedian(arr: number[]): number;
declare const median: number;
declare let matrix: number[][];
declare function countNonZero(matrix: number[][], startRow: number, endRow: number, startCol: number, endCol: number): number;
declare const nonZeroCount: number;
declare let myTuple: [number, string, number];
declare function multiplyNumbersFromTuple(tuple: [number, string, number]): number;
declare const result: number;
declare enum Vitamin {
    A = "A",
    B3 = "B3",
    B6 = "B6",
    B12 = "B12",
    E = "E"
}
declare class Pet {
    name: string;
    age: number;
    speak(): string;
}
declare class Dog extends Pet {
    label: string;
    age: number;
    speak(): string;
}
declare class Cat extends Pet {
    name: string;
    age: number;
    speak(): string;
}
declare function printPet<T extends Pet>(pet: T): void;
declare const myDog: Dog;
declare const myCat: Cat;
type VitaminInfo = {
    name: Vitamin;
    description: string;
    source: string[];
};
declare const vitaminB6: VitaminInfo;
