import { BaseError } from "./BaseError";

export class InvalidBandName extends BaseError{
    constructor(){
        super("Invalid band name", 400);
    }
}