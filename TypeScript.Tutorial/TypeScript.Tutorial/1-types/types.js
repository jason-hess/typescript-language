// TypeScript is a typed superset of JavaScript that compiles to plain JavaScript
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// boolean
var isDone = false;
// As in JavaScript, all numbers in TypeScript are floating point values. 
// These floating point numbers get the type number. In addition to hexadecimal and decimal literals, 
// TypeScript also supports binary and octal literals introduced in ECMAScript 2015.
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
// string
var color = "blue";
color = 'red'; // can use single quotes
var fullName = "Justin Talor";
var age = 10;
var theString = "This a template string\n" + fullName + ": " + (age + 1);
// array
var list = [1, 2, 3];
var anotherList = [1, 2, 3];
// because arrays are JavaScript arrays, you can add elements to them and create holes in them
list[3] = 4;
list.push(5);
anotherList[100] = 101;
var hole = anotherList[99]; // sets hole to undefined
// Tuple types allow you to express an array where the type of a fixed number of elements is known, 
// but need not be the same and lets you specify type assertions on the elements.
var firstTuple = ["key", 1];
firstTuple[0] = "newKey";
firstTuple[1] = 13;
firstTuple = ["anotherKey", 22];
firstTuple = [true, "jason"]; // invalid
var anotherTuple = [1, "key"];
// can access an index outside of the legal range: (I'm not sure why)
anotherTuple[3] = "true";
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
var Speed;
(function (Speed) {
    Speed[Speed["Slow"] = 1] = "Slow";
    Speed[Speed["Fast"] = 2] = "Fast";
})(Speed || (Speed = {}));
; // Spped.Fast = 2
// or we can specify the numeric value of each enum value
var AnotherEnum;
(function (AnotherEnum) {
    AnotherEnum[AnotherEnum["ValueOne"] = 10] = "ValueOne";
    AnotherEnum[AnotherEnum["ValueTwo"] = 13] = "ValueTwo";
})(AnotherEnum || (AnotherEnum = {}));
;
// we can convert from numeric to string value 
var enumValue = AnotherEnum[13]; // enumValue = "ValueTwo"
var enumNumberValue = AnotherEnum["ValueTwo"];
var anotherEnumValue = 13;
// be careful
var yetAnotherEnumValue = 12; // valid but falls out of the valid range.
// untyped lets you opt-in and out-out of type checking as needed
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
// type inference
var isAlsoDone = true;
isAlsoDone = 100;
// type assertions
// A type assertion is like a type cast in other languages, but performs no special 
// checking or restructuring of data. It has no runtime impact, and is used purely 
// by the compiler. TypeScript assumes that you, the programmer, have performed any 
// special checks that you need.
var aValue = "jason";
var anotherLength = aValue.length;
var aLength = aValue.length;
// when using TypeScript with JSX, only as-style assertions are allowed
// use let instead of var whenever possible to prevent scope issues
var tz = null;
// in most cases (assigning default values to variables and paramaters, and setting
// function return values) type inferenece is straightforward
var typeInferred = true;
// a best-possible-type algorithm is used to determine the type of more complex types:
var typeInferredArray = [1, 2, null]; // number[]
var typeInferredArray2 = ["1", 2]; // (string | number)[]
// sometimes you'll still need to explicitly state the type you're after
var AnAnimal = (function () {
    function AnAnimal() {
    }
    return AnAnimal;
}());
var Bear = (function (_super) {
    __extends(Bear, _super);
    function Bear() {
        _super.apply(this, arguments);
    }
    Bear.prototype.growl = function () { };
    return Bear;
}(AnAnimal));
var Cheetah = (function (_super) {
    __extends(Cheetah, _super);
    function Cheetah() {
        _super.apply(this, arguments);
    }
    return Cheetah;
}(AnAnimal));
var typeInferredArray3 = [new Bear(), new Cheetah()]; // Bear[] ??
var typeNotInferredArray = [new Bear(), new Cheetah()];
// When no best common type is found, the resulting inference is the empty object type, {}. 
// Because this type has no members, attempting to use any properties of it will cause an error.
// This result allows you to still use the object in a type- agnostic manner, while providing type 
// safety in cases where the type of the object can’t be implicitly determined.
// TypeScript can also do contextual typing which is where TypeScript can infer a type based on the context
// in which it is used.
// For instance, in the following onmousedown is an event of type MouseEvent which means we can infer
// mouseEvent is of type MouseEvent, which means buton does not exist
window.onmousedown = function (mouseEvent) {
    console.log(mouseEvent.buton); //<- Error
};
// Contextual typing applies in many cases. Common cases include arguments to function calls, right hand 
// sides of assignments, type assertions, members of object and array literals, and return statements. 
// The contextual type also acts as a candidate type in best common type.For example:
// union types
// A union type describes a value that can be one of several types
// If we have a value that has a union type, we can only access members that are common to all types in the union.
var unionType = "10";
unionType = true;
unionType = 10; // error
var anotherUnionType; // parens are optional
var arrayUnionType; // or a required for precedence
var unionOfNumberOrStringArray;
// used in functions
function unionTypeParameter(value, suffixOrPadding) {
    if (typeof suffixOrPadding == "boolean") {
    }
    if (typeof suffixOrPadding == "string") {
    }
    return "";
}
// type guard
// A type guard is some expression that performs a runtime check that 
// guarantees the type in some scope.To define a type guard, we simply 
// need to define a function whose return type is a type predicate:
function isBear(pet) {
    return pet.growl !== undefined;
}
// generics lets us capture the type of an argument or denote a return type
function genericFunction(param) {
    // the type T has been captured so we can use it as a return type
    // TypeScript still enforces typing here, so it doesn't know much about T
    // so it won't let you do much to it:
    var x = param.length; // error
    return param;
}
var explicitGeneric = genericFunction(true);
// the compiler can sometimes infer the type
var genericValue = genericFunction("hello"); // returns string
var genericValue2 = genericFunction(10); // returns number
