/// <reference path="multi-file-namespace.ts"/>
namespace MultiFileNamespace {

    export interface IStringValidator2 {
        isAcceptable(s: string): boolean;
    }

    export class Jason extends IStringValidator2 {
        construction() {}
    }
}

let instanceNamespace = new MultiFileNamespace.Jason();