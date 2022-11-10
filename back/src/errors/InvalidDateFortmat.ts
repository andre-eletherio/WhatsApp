import { BaseError } from "./BaseError";

export class InvalidDateFormat extends BaseError {
    constructor() {
        super("Invalid date format", 400);
    }
}