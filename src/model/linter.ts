import { ILinter } from "../interface/model/linter.interface";

export class Linter implements ILinter {
    constructor() {
    }

    // stringArr =[type, scope, subject, body, footer]
    lint(stringArr: [string, string, string, string, string]) {
        throw new Error("Not Implemented.");
    }
}