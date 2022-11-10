import { BaseError } from "./BaseError";

export class InvalidPasswordLength extends BaseError{
    constructor(){
        super("Invalid password length. Minimum of 6 characters required", 400);
    }
}