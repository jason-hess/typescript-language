﻿// TypeScript is a typed superset of JavaScript that compiles to plain JavaScript

// boolean
let isDone: boolean = false;

// number
// As in JavaScript, all numbers in TypeScript are floating point values. 
// These floating point numbers get the type number. In addition to hexadecimal and decimal literals, 
// TypeScript also supports binary and octal literals introduced in ECMAScript 2015.
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// string
let color: string = "blue";
color = 'red'; // can use single quotes
let fullName: string = "Justin Talor";
let age: number = 10;
// template strings can be multi-line and substittute variables
let theString: string = `This a template string
${fullName}: ${age + 1}`;

// array
let theList: number[] = [1, 2, 3];
let anotherList: Array<number> = [1, 2, 3];
// because arrays are JavaScript arrays, you can add elements to them and create holes in them
theList[3] = 4;
theList.push(5);
anotherList[100] = 101;
let hole: number = anotherList[99]; // sets hole to undefined

// Tuple types allow you to express an array where the type of a fixed number of elements is known, 
// but need not be the same and lets you specify type assertions on the elements.
let firstTuple: [string, number] = ["key", 1];
firstTuple[0] = "newKey";
firstTuple[1] = 13;
firstTuple = ["anotherKey", 22];
firstTuple = [true, "jason"]; // invalid
let anotherTuple = [1, "key"];
// can access an index outside of the legal range: (I'm not sure why)
anotherTuple[3] = "true";

// enum
enum Colour { Red, Blue, Green };
let y = Colour.Red;
// enums normally start with the value 0, but we can change this
// to start at the value one:
enum Speed { Slow = 1, Fast }; // Spped.Fast = 2
// or we can specify the numeric value of each enum value
enum AnotherEnum { ValueOne = 10, ValueTwo = 13 };
// we can convert from numeric to string value and back again 
let enumValue: string = AnotherEnum[13]; // enumValue = "ValueTwo"
let enumNumberValue: number = AnotherEnum["ValueTwo"];
let anotherEnumValue: AnotherEnum = 13;
// be careful
let yetAnotherEnumValue: AnotherEnum = 12; // valid but falls out of the valid range.

// untyped lets you opt-in and out-out of type checking as needed
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

// type inference
let isAlsoDone = true;
isAlsoDone = 100;

// type assertions
// A type assertion is like a type cast in other languages, but performs no special 
// checking or restructuring of data. It has no runtime impact, and is used purely 
// by the compiler. TypeScript assumes that you, the programmer, have performed any 
// special checks that you need.
let aValue: any = "jason";
let anotherLength: number = (aValue as string).length;
let aLength: number = (<string>aValue).length;
// when using TypeScript with JSX, only as-style assertions are allowed

// use let instead of var whenever possible to prevent scope issues
var tz: string = null;

// A union type describes a value that can be one of several types
// If we have a value that has a union type, we can only access members that are common to all types in the union.
let unionType: (boolean | string) = "10";
unionType = true;
unionType = 10; // error
let anotherUnionType: number | string; // parens are optional
let arrayUnionType: (number | string)[]; // or a required for precedence
let unionOfNumberOrStringArray: number | string[];
// used in functions
function unionTypeParameter(value: string, suffixOrPadding: boolean | string): string {
    if (typeof suffixOrPadding == "boolean") {
    }
    if (typeof suffixOrPadding == "string") {
    }
    return "";
}

// in most cases (assigning default values to variables and paramaters, and setting
// function return values) type inferenece is straightforward
let typeInferred = true;

// a best-possible-type algorithm is used to determine the type of more complex types:
let typeInferredArray = [1, 2, null]; // number[]
let typeInferredArray2 = ["1", 2]; // (string | number)[]
// sometimes you'll still need to explicitly state the type you're after
class AnAnimal { }
class Bear extends AnAnimal {
    growl() {}
}
class Cheetah extends AnAnimal { }
let typeInferredArray3 = [new Bear(), new Cheetah()]; // Bear[] ??
let typeNotInferredArray: AnAnimal[] = [new Bear(), new Cheetah()];
// When no best common type is found, the resulting inference is the empty object type, {}. 
// Because this type has no members, attempting to use any properties of it will cause an error.
// This result allows you to still use the object in a type- agnostic manner, while providing type 
// safety in cases where the type of the object can’t be implicitly determined.

// TypeScript can also do contextual typing which is where TypeScript can infer a type based on the context
// in which it is used.
// For instance, in the following onmousedown is an event of type MouseEvent which means we can infer
// mouseEvent is of type MouseEvent, which means buton does not exist
window.onmousedown = mouseEvent => {
    console.log(mouseEvent.buton);  //<- Error
};
// Contextual typing applies in many cases. Common cases include arguments to function calls, right hand 
// sides of assignments, type assertions, members of object and array literals, and return statements. 
// The contextual type also acts as a candidate type in best common type.For example:

// type guard
// A type guard is some expression that performs a runtime check that 
// guarantees the type in some scope.To define a type guard, we simply 
// need to define a function whose return type is a type predicate:
function isBear(pet: Bear | Cheetah): pet is Bear {
    return (pet as Bear).growl !== undefined;
}

// generics lets us capture the type of an argument or denote a return type
function genericFunction<T>(param: T): T {
    // the type T has been captured so we can use it as a return type
    // TypeScript still enforces typing here, so it doesn't know much about T
    // so it won't let you do much to it:
    let x = param.length; // error
    return param;
}
let explicitGeneric = genericFunction<boolean>(true);
// the compiler can sometimes infer the type
let genericValue = genericFunction("hello"); // returns string
let genericValue2 = genericFunction(10); // returns number