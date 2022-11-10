import { BaseError } from "./BaseError";

export class AlreadyFriends extends BaseError {
    constructor() {
        super("Users are already friends", 400);
    }
}