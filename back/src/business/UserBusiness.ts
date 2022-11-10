import { FriendsDatabase } from "../database/FriendsDatabase";
import { MessagesDatabase } from "../database/MessagesDatabase";
import { UserDatabase } from "../database/UserDatabase";
import { AlreadyFriends } from "../errors/AlreadyFriends";
import { EmailAlreadyExists } from "../errors/EmailAlreadyExists";
import { EmailNotRegistered } from "../errors/EmailNotRegistered";
import { EmptyField } from "../errors/EmptyField(s)";
import { FriendDoesNotExist } from "../errors/FriendDoesNotExist";
import { InvalidEmail } from "../errors/InvalidEmail";
import { InvalidName } from "../errors/InvalidName";
import { InvalidNameLength } from "../errors/InvalidNameLength";
import { InvalidPassword } from "../errors/InvalidPassword";
import { InvalidPasswordLength } from "../errors/InvalidPasswordLength";
import { InvalidToken } from "../errors/InvalidToken";
import { PasswordMatch } from "../errors/PasswordMatch";
import { WrongPassowrd } from "../errors/WrongPassword";
import { IFindByUsersIdsInputDTO, IFriendsDB } from "../model/Friends";
import { IGetMessagesInputDBDTO, IGetMessagesInputDTO, ISendMessageInputDBDTO, ISendMessageInputDTO } from "../model/Messages";
import { IAddFriendInputDTO, ILoginInputDTO, ILoginOutputDTO, ISignUpInputDBDTO, ISignUpInputDTO, ISignUpOutputDTO } from "../model/User";
import { Authenticator, ITokenPayload } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export class UserBusiness {
    private userDatabase: UserDatabase;
    private hashManager: HashManager
    private idGenerator: IdGenerator;
    private authenticator: Authenticator;
    private friendsDatabase: FriendsDatabase;
    private messagesDatabase: MessagesDatabase;
    constructor(userDatabase: UserDatabase, hashManager: HashManager, idGenerator: IdGenerator, authenticator: Authenticator, friendsDatabase: FriendsDatabase, messagesDatabase: MessagesDatabase) {
        this.userDatabase = userDatabase;
        this.hashManager = hashManager;
        this.idGenerator = idGenerator;
        this.authenticator = authenticator;
        this.friendsDatabase = friendsDatabase;
        this.messagesDatabase = messagesDatabase;
    }

    public signUp = async (input: ISignUpInputDTO): Promise<ISignUpOutputDTO> => {
        const { name, email, password, passwordConfirmation } = input;

        if (!name || !email || !password|| !passwordConfirmation) {
            throw new EmptyField();
        }

        if (typeof (name) !== "string") {
            throw new InvalidName();
        }

        if (typeof (email) !== "string" || !email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
            throw new InvalidEmail();
        }

        if (typeof (password) !== "string" || typeof (passwordConfirmation) !== "string") {
            throw new InvalidPassword();
        }

        if (name.length < 3) {
            throw new InvalidNameLength();
        }

        if (password.length < 6) {
            throw new InvalidPasswordLength();
        }

        if (password !== passwordConfirmation) {
            throw new PasswordMatch();
        }

        const emailExists = await this.userDatabase.findByEmail(email);


        if (emailExists) {
            throw new EmailAlreadyExists();
        }

        const hashedPassword = await this.hashManager.hash(password);

        const user: ISignUpInputDBDTO = {
            name,
            email,
            password: hashedPassword
        }

        await this.userDatabase.register(user);

        const userDB = await this.userDatabase.findByEmail(email);

        if (!userDB) {
            throw new InvalidEmail();
        }

        const payload: ITokenPayload = {
            id: +userDB?.id
        }

        const token = this.authenticator.generateToken(payload);

        const response: ISignUpOutputDTO = {
            message: `User ${user.name} registered`,
            token
        }

        return response;
    }

    public login = async (input: ILoginInputDTO): Promise<ILoginOutputDTO> => {
        const { email, password } = input;

        if (!email || !password) {
            throw new EmptyField();
        }

        if (typeof (email) !== "string" || !email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
            throw new InvalidEmail;
        }

        if (typeof (password) !== "string" || password.length < 6) {
            throw new InvalidPassword;
        }

        const user = await this.userDatabase.findByEmail(email);

        if (!user) {
            throw new EmailNotRegistered();
        }

        const isPasswordCorrect = await this.hashManager.compare(password, user.password);

        if (!isPasswordCorrect) {
            throw new WrongPassowrd();
        }

        const payload: ITokenPayload = {
            id: +user.id
        }

        const token = this.authenticator.generateToken(payload);

        const response: ILoginOutputDTO = {
            message: `User ${user.name} logged in!`,
            token
        }

        return response;
    }


    public addFriend = async (input: IAddFriendInputDTO) => {
        const { token, user2Email } = input;

        if (!token || !user2Email) {
            throw new EmptyField();
        }

        const user1 = this.authenticator.getTokenPayload(token);

        if (!user1) {
            throw new InvalidToken();
        }

        const user2 = await this.userDatabase.findByEmail(user2Email);

        if (!user2) {
            throw new EmailNotRegistered();
        }

        let user1_id: number;
        let user2_id: number;

        if (+user1.id > +user2.id) {
            user1_id = +user2.id;
            user2_id = +user1.id;
        } else {
            user1_id = +user1.id;
            user2_id = +user2.id;
        }

        // console.log(user1_id, user2_id)
        const inputFind: IFindByUsersIdsInputDTO = {
            user1_id: +user1_id,
            user2_id: +user2_id
        }

        const alreadyFriends = await this.friendsDatabase.findByUsersIds(inputFind);
        // console.log(alreadyFriends);

        if (alreadyFriends) {
            throw new AlreadyFriends();
        }

        const id = this.idGenerator.generate();

        const inputDB: IFriendsDB = {
            id,
            user1_id: +user1.id,
            user2_id: +user2.id
        }

        await this.friendsDatabase.addFriend(inputDB);
    }

    public sendMessage = async (input: ISendMessageInputDTO) => {
        const { token, message, user2Id } = input;

        if (!token || !message || !user2Id) {
            throw new EmptyField();
        }

        const user1 = this.authenticator.getTokenPayload(token);

        if (!user1) {
            throw new InvalidToken();
        }

        const user2 = await this.userDatabase.findById(+user2Id);

        if (!user2) {
            throw new FriendDoesNotExist();
        }

        const receiver = +user2Id;

        let user1_id: number;
        let user2_id: number;

        if (+user1.id > +user2Id) {
            user1_id = +user2Id;
            user2_id = +user1.id;
        } else {
            user1_id = +user1.id;
            user2_id = +user2Id;
        }

        const inputDB: ISendMessageInputDBDTO = {
            user1_id: +user1_id,
            user2_id: +user2_id,
            message,
            receiver
        }

        await this.messagesDatabase.sendMessage(inputDB);

        await this.messagesDatabase.setNotificationTrue(receiver);

        await this.friendsDatabase.newMessageTrue(user1_id, user2_id, receiver);
    }

    public getNotifications = async (token: string) => {
        if (!token) {
            throw new EmptyField();
        }

        const user1 = this.authenticator.getTokenPayload(token);

        if (!user1) {
            throw new InvalidToken();
        }

        const response = await this.friendsDatabase.getFriends(user1.id);

        await this.messagesDatabase.setNotificationFalse(user1.id);

        return response;
    }

    public getMessages = async (input: IGetMessagesInputDTO) => {
        const {token, user2_id} = input;

        if (!token || !user2_id) {
            throw new EmptyField();
        }

        const user1 = this.authenticator.getTokenPayload(token);

        if (!user1) {
            throw new InvalidToken();
        }

        const receiver = +user1.id;

        let user1Id: number;
        let user2Id: number;

        if (+user1.id > +user2_id) {
            user2Id = +user1.id
            user1Id = +user2_id
        } else {
            user1Id = +user1.id
            user2Id = +user2_id
        }

        const inputDB: IGetMessagesInputDBDTO = {
            user1_id: +user1Id,
            user2_id: +user2Id
        }

        const messages = await this.messagesDatabase.getMessages(inputDB);

        await this.messagesDatabase.setNotificationFalse(+user1.id);

        await this.friendsDatabase.newMessageFalse(user1Id, user2Id, receiver);

        return messages;
    }

    public GetNotification = async (token: string) => {
        if (!token) {
            throw new InvalidToken();
        }

        if (typeof(token) != "string") {
            throw new InvalidToken();
        }

        const payload = this.authenticator.getTokenPayload(token);

        if (!payload) {
            throw new InvalidToken();
        }

        const newMessages = await this.messagesDatabase.getNotification(payload.id)
        // console.log(newMessages);
    }

    public getContacts = async (token: string) => {
        if (!token) {
            throw new EmptyField();
        }

        const user1 = this.authenticator.getTokenPayload(token);

        if (!user1) {
            throw new InvalidToken();
        }

        const response = await this.friendsDatabase.getContacts(user1.id);

        await this.messagesDatabase.setNotificationFalse(user1.id);

        return response;
    }
}