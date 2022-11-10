import { BaseError } from "./BaseError";

export class TIcketSellAuth extends BaseError {
    constructor() {
        super("You can only sell your own tickets", 400);
    }
}