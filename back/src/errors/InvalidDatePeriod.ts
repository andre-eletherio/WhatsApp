import { BaseError } from "./BaseError";

export class InvalidDatePeriod extends BaseError {
    constructor() {
        super("Invalid date, the festival occour between 05-11 of december", 400);
    }
}