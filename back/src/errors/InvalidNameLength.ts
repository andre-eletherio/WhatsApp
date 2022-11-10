import { BaseError } from "./BaseError";

export class InvalidNameLength extends BaseError{
    constructor(){
        super("Invalid name length. Minimum of 3 characters required", 400);
    }
}