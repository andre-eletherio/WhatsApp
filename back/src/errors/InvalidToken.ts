import { BaseError } from "./BaseError";

export class InvalidToken extends BaseError {
    constructor() {
        super("Invalid token", 400);
    }
}