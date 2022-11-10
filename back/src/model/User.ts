export class User {
    private id: string;
    private name: string;
    private email: string;
    private password: string;
    constructor(id: string, name: string, email: string, password: string){
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    static toUserModel = (input: any): User => {
        return new User(input.id, input.name, input.email, input.password);
    }

    public getId = (): string => {
        return this.id;
    }
    public getName = (): string => {
        return this.name;
    }
    public getEmail = (): string => {
        return this.email;
    }
    public getPassword = (): string => {
        return this.password;
    }
}

export interface ISignUpInputDTO {
    name: string,
    email: string,
    password: string,
    passwordConfirmation: string
}

export interface IUserDB {
    id: number,
    name: string,
    email: string,
    password: string,
}

export interface ISignUpInputDTO {
    name: string,
    email: string,
    password: string
}

export interface ISignUpInputDBDTO {
    name: string,
    email: string,
    password: string
}

export interface ISignUpOutputDTO {
    message: string,
    token: string
}

export interface ILoginInputDTO {
    email: string,
    password: string
}

export interface ILoginOutputDTO {
    message: string,
    token: string
}

export interface IAddFriendInputDTO {
    token: string,
    user2Email: string
}