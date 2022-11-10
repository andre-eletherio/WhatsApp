import { BaseError } from "./BaseError";

export class InsufficientPermission extends BaseError {
    constructor() {
        super("Insufficient permission", 403);
    }
}