import { BaseError } from "./BaseError";

export class ShowDoesNotExist extends BaseError{
    constructor(){
        super("Show id does not exist", 404);
    }
}