// TypeScript Namespaces allow you to organize names and hide implementation details

namespace Validation {

    // export indicates visible outside of the namespace
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }

    const lettersRegexp = /^[A-Za-z]+$/;
    const numberRegexp = /^[0-9]+$/;

    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(s: string) {
            return lettersRegexp.test(s);
        }
    }

    export class ZipCodeValidator implements StringValidator {
        isAcceptable(s: string) {
            return s.length === 5 && numberRegexp.test(s);
        }
    }
}

Validation.lettersRegexp // error - not visible
let validator = new Validation.LettersOnlyValidator();

// Namespace Aliases
import val = Validation;
let anotherValidor = new val.LettersOnlyValidator();
import val2 = Validation.LettersOnlyValidator;
let anotherValidator = new val2();