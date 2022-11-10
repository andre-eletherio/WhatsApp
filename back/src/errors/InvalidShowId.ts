import { BaseError } from "./BaseError";

export class InvalidShowId extends BaseError{
    constructor(){
        super("Invalid show_id", 400);
    }
}