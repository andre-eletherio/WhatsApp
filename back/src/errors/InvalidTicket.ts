import { BaseError } from "./BaseError";

export class InvalidTicket extends BaseError {
    constructor() {
        super("Invalid ticket", 400);
    }
}