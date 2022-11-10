import { BaseError } from "./BaseError";

export class EmailAlreadyExists extends BaseError {
    constructor() {
        super("Email already exists", 409);
    }
}