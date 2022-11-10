import { BaseError } from "./BaseError";

export class WrongPassowrd extends BaseError {
    constructor() {
        super("Wrong password", 401)
    }
}