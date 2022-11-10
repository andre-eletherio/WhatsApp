import { BaseError } from "./BaseError";

export class DateBusy extends BaseError {
    constructor() {
        super("There already is a show in this day", 400);
    }
}