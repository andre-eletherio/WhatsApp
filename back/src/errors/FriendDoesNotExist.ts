import { BaseError } from "./BaseError";

export class FriendDoesNotExist extends BaseError {
    constructor() {
        super("Friend id does not exist", 400);
    }
}