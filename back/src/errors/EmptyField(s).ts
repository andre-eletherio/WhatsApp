import { BaseError } from "./BaseError";

export class EmptyField extends BaseError {
    constructor() {
        super("Empty field(s)", 400)
    }
}