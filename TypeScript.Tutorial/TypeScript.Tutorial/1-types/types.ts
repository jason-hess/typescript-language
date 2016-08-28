// TypeScript is a typed superset of JavaScript that compiles to plain JavaScript

// boolean
let isDone: boolean = false;

// As in JavaScript, all numbers in TypeScript are floating point values. 
// These floating point numbers get the type number. In addition to hexadecimal and decimal literals, 
// TypeScript also supports binary and octal literals introduced in ECMAScript 2015.
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// type inference
let isAlsoDone = true;
isAlsoDone = 100;

// string
let color: string = "blue";
color = 'red'; // can use single quotes
let fullName = "Justin Talor";
let age = 10;
let theString = `This a template string
${fullName}: ${age + 1}`;

// array
let list: number[] = [1, 2, 3];
let anotherList: Array<number> = [1, 2, 3];

// tuple
let firstTuple: [string, number] = ["key", 1];
firstTuple[0] = "newKey";
firstTuple[1] = 13;
firstTuple = ["anotherKey", 22];
firstTuple = [true, "jason"];
let anotherTuple = [1, "key"];

// enum
enum Colour { Red, Blue, Green };
let y = Colour.Red;
// enums normally start with the value 0, but we can change this
// to start at the value one:
enum Spped { Slow = 1, Fast };
enum AnotherEnum { ValueOne = 10, ValueTwo = 13 };

// untyped
let z: any = "string";
z = 10;
z = true;
let untypedList: any[] = ["string", 10];

// void
let t: void = null;
let u: void = undefined;
// void is only really useful for functions:
function voidFunction(): void {
    // i don't return anything
}

// type assertions
// A type assertion is like a type cast in other languages, but performs no special 
// checking or restructuring of data. It has no runtime impact, and is used purely 
// by the compiler. TypeScript assumes that you, the programmer, have performed any 
// special checks that you need
let aValue: any = "jason";
let anotherLength: number = (aValue as string).length;
let aLength: number = (<string>aValue).length;
// when using TypeScript with JSX, only as-style assertions are allowed

// use let instead of var whenever possible to prevent scope issues
var tz: string = null;