// TypeScript is a typed superset of JavaScript that compiles to plain JavaScript
// boolean
var isDone = false;
// As in JavaScript, all numbers in TypeScript are floating point values. 
// These floating point numbers get the type number. In addition to hexadecimal and decimal literals, 
// TypeScript also supports binary and octal literals introduced in ECMAScript 2015.
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
// type inference
var isAlsoDone = true;
isAlsoDone = 100;
// string
var color = "blue";
color = 'red'; // can use single quotes
var fullName = "Justin Talor";
var age = 10;
var theString = "This a template string\n" + fullName + ": " + (age + 1);
// array
var list = [1, 2, 3];
var anotherList = [1, 2, 3];
// tuple
var firstTuple = ["key", 1];
firstTuple[0] = "newKey";
firstTuple[1] = 13;
firstTuple = ["anotherKey", 22];
firstTuple = [true, "jason"];
var anotherTuple = [1, "key"];
// enum
var Colour;
(function (Colour) {
    Colour[Colour["Red"] = 0] = "Red";
    Colour[Colour["Blue"] = 1] = "Blue";
    Colour[Colour["Green"] = 2] = "Green";
})(Colour || (Colour = {}));
;
var y = Colour.Red;
// enums normally start with the value 0, but we can change this
// to start at the value one:
var Spped;
(function (Spped) {
    Spped[Spped["Slow"] = 1] = "Slow";
    Spped[Spped["Fast"] = 2] = "Fast";
})(Spped || (Spped = {}));
;
var AnotherEnum;
(function (AnotherEnum) {
    AnotherEnum[AnotherEnum["ValueOne"] = 10] = "ValueOne";
    AnotherEnum[AnotherEnum["ValueTwo"] = 13] = "ValueTwo";
})(AnotherEnum || (AnotherEnum = {}));
;
// untyped
var z = "string";
z = 10;
z = true;
var untypedList = ["string", 10];
// void
var t = null;
var u = undefined;
// void is only really useful for functions:
function voidFunction() {
    // i don't return anything
}
// type assertions
// A type assertion is like a type cast in other languages, but performs no special 
// checking or restructuring of data.It has no runtime impact, and is used purely 
// by the compiler.TypeScript assumes that you, the programmer, have performed any 
// special checks that you need
var aValue = "jason";
var anotherLength = aValue.length;
var aLength = aValue.length;
// when using TypeScript with JSX, only as-style assertions are allowed
// use let instead of var whenever possible to prevent scope issues
var tz = null;
