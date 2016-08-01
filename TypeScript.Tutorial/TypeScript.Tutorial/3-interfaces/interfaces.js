var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// the compiler checks that objects passed to this function
// at least have a property called label of type string
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
function printAnotherLabel(lablledObj) {
    console.log(lablledObj.label);
}
;
function someBlahFunction(obj) {
    console.log(obj.firstProperty);
    if (obj.secondProperty) {
        console.log(obj.secondProperty);
    }
}
someBlahFunction({ firstProperty: 1 }); // type check failure
someBlahFunction({ firstProperty: "1" });
someBlahFunction({ firstProperty: "1", secondProperty: 2 });
// The advantage of optional properties is that you can describe these possibly available 
// properties while still also preventing use of properties that are not part of the interface
function someBlahBlahFunction(obj) {
    console.log(obj.thirdProperty);
}
// Object literals get special treatment and undergo excess property checking when assigning 
// them to other variables, or passing them as arguments.If an object literal has any properties 
// that the “target type” doesn’t have, you’ll get an error.
function excessPropertyChecking(obj) {
    console.log(obj.label);
}
var obj = { jason: 10, label: "hello" };
excessPropertyChecking(obj); // no error because check is less strict - additional properties are OK
excessPropertyChecking({ jason: 10, label: "hello" }); // error because check is more strict
// this lets us describe the shape of a variable
// note the parameter name isn't enforced to be the 
// same, just the type
var theFunction = function (j) {
    console.log(j++);
    return "finished";
};
// the parameter can be type inferred
var theOtherFunction = function (j) {
    console.log(j++);
    return "finished";
};
// return types can also be inferred
var anotherFunction = function (j) {
    return true; // this is an error since the return type is inferred to be a string
};
// inferrence can also go the other way
// here inferredFunction is known to take a number and return a boolean
var inferredFunction = function (j) {
    return true;
};
var returnValue = inferredFunction("hello"); // error on param and return type
var indexable;
indexable["key"] = 10;
indexable[10] = 10; // error
var Thing = (function () {
    function Thing() {
    }
    return Thing;
}());
var SubThing = (function (_super) {
    __extends(SubThing, _super);
    function SubThing() {
        _super.apply(this, arguments);
    }
    return SubThing;
}(Thing));
var Dog = (function () {
    function Dog() {
        this.type = "Dog";
    }
    Dog.prototype.growOlder = function () { this.age++; };
    return Dog;
}());
;
;
var childInstance = { label: "one", label2: 2 };
;
var hybridInstance = function () {
    var counter = function (value) { return true; };
    counter[10] = true;
    counter.value = true;
    counter.setValue = function (v) { };
    return counter;
};
// Interfaces describe the public side of the class, rather than both the public 
// and private side.This prohibits you from using them to check that a class also 
// has particular types for the private side of the class instance.
// todo: come back to this one later 
