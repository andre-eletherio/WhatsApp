import { BaseError } from "./BaseError";

export class TicketsSoldOut extends BaseError {
    constructor() {
        super("Tickets sold out", 400);
    }
}