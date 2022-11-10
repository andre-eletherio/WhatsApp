export class Message{
    private id: string;
    private user1_id: string;
    private user2_id: string;
    private seen: boolean;
    constructor(id: string, user1_id: string, user2_id: string, seen: boolean){
        this.id = id;
        this.user1_id = user1_id;
        this.user2_id = user2_id;
        this.seen = seen;
    }
}

export interface IMessageDB {
    id: string,
    user1_id: string,
    user2_id: string,
    seen: boolean
}

export interface ISendMessageInputDTO {
    token: string,
    message: string,
    user2Id: number
}

export interface ISendMessageInputDBDTO {
    user1_id: number,
    user2_id: number,
    message: string,
    receiver: number
}

export interface IGetMessagesInputDTO {
    token: string,
    user2_id: string
}

export interface IGetMessagesInputDBDTO {
    user1_id: number,
    user2_id: number
}