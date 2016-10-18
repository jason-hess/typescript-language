import IExportedStringValidator = require("./IExportedStringValidator");
export const numberRegexp = /^[0-9]+$/;

export class ZipCodeValidator implements IExportedStringValidator.IExportedStringValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}