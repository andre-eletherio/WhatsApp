import { BaseError } from "./BaseError";

export class PasswordMatch extends BaseError{
    constructor(){
        super("Password and confirmation do not match", 400);
    }
}