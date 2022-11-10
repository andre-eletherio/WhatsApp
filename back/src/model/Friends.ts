export class Friends {
    private id: string;
    private user1_id: string;
    private user2_id: string;
    private new_messages: boolean;
    constructor(id: string, name: string, user1_id: string, user2_id: string, new_messages: boolean){
        this.id = id;
        this.user1_id = user1_id;
        this.user2_id = user2_id;
        this.new_messages = new_messages;
    }

    public getId = (): string => {
        return this.id;
    }
    public getUser1_id = (): string => {
        return this.user1_id;
    }
    public getUser2_id = (): string => {
        return this.user2_id;
    }
}

export interface IFriendsDB {
    id: string,
    user1_id: number,
    user2_id: number,
}

export interface IFindByUsersIdsInputDTO {
    user1_id: number,
    user2_id: number
}

export interface INewMessageTrueInputDTO {
    user1_id: number,
    user2_id: number
}

export interface INewMessageFalseInputDTO {
    user1_id: number,
    user2_id: number
}