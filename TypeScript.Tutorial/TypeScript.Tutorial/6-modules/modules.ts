// In TypeScript, just as in ECMAScript 2015, any file containing a top-level import or export is considered a module

// Modules are executed within their own scope, not in the global scope.  This means that things declared in a module
// are not visible outside the module unless they are explicitly exported using one of the export forms.
// Conversely, to consume a variable, function, class, interface, etc. exported from a different module,
// it has to be imported using one of the import forms.

// Modules import one another using a module loader.At runtime the module loader is responsible for locating 
// and executing all dependencies of a module before executing it.Well - known modules loaders used in 
// JavaScript are the CommonJS module loader for Node.js and require.js for Web applications.
// In TypeScript, just as in ECMAScript 2015, any file containing a top- level import or export is 
// considered a module.

// Any declaration (such as a variable, function, class, type alias, or interface) can be exported by 
// adding the export keyword.
export interface IExportedStringValidator {
    isAcceptable(s: string): boolean;
}

// Often modules extend other modules, and partially expose some of their features. A re-export does 
// not import it locally, or introduce a local variable.