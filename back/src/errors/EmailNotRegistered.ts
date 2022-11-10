import { BaseError } from "./BaseError";

export class EmailNotRegistered extends BaseError {
    constructor() {
        super("E-mail not registered", 404);
    }
}