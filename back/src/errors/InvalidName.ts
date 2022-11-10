import { BaseError } from "./BaseError";

export class InvalidName extends BaseError{
    constructor(){
        super("Invalid name", 400);
    }
}