import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { IGetMessagesInputDTO, ISendMessageInputDTO } from "../model/Messages";
import { IAddFriendInputDTO, ILoginInputDTO, ISignUpInputDTO, ISignUpOutputDTO } from "../model/User";

export class UserController {
    private userBusiness: UserBusiness;
    constructor(userBusiness: UserBusiness) {
        this.userBusiness = userBusiness;
    }

    public signUp = async (req: Request, res: Response) => {
        try {
            const { name, email, password, passwordConfirmation } = req.body;

            const input: ISignUpInputDTO = {
                name,
                email,
                password,
                passwordConfirmation
            }

            const response: ISignUpOutputDTO = await this.userBusiness.signUp(input);

            res.status(201).send(response);
        } catch (error) {
            if (error instanceof Error) {
                return res.status(res.statusCode).send({ message: error.message });
            }
            res.status(500).send({ message: "Unexpected error" });
        }
    }


    public login = async (req: Request, res: Response) => {
        try {
            const input: ILoginInputDTO = {
                email: req.body.email,
                password: req.body.password
            }

            const response = await this.userBusiness.login(input);

            res.status(201).send(response);

        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).send({ message: error.message });
            }
            res.status(500).send({ message: "Unexpected error" });
        }
    }

    public addFriend = async (req: Request, res: Response) => {
        try {
            const input: IAddFriendInputDTO = {
                token: req.headers.authorization as string,
                user2Email: req.body.user2Email
            }
            const response = await this.userBusiness.addFriend(input);
            res.send("ok");

        } catch (error) {
            if (error instanceof Error) {
                return res.status(res.statusCode).send({ message: error.message });
            }
            res.status(500).send({ message: "Unexpected error" });
        }
    }

    public sendMessage = async (req: Request, res: Response) => {
        try {
            const input: ISendMessageInputDTO = {
                token: req.headers.authorization as string,
                message: req.body.message,
                user2Id: req.params.user_id as unknown as number
            }

            await this.userBusiness.sendMessage(input);
            res.send("Message sent");
        } catch (error) {
            if (error instanceof Error) {
                return res.status(res.statusCode).send({ message: error.message });
            }
            res.status(500).send({ message: "Unexpected error" })
        }
    }

    public getNotifications = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string;

            const response = await this.userBusiness.getNotifications(token);

            res.send(response);
        } catch (error) {
            if (error instanceof Error) {
                return res.status(res.statusCode).send({ message: error.message });
            }
            res.status(500).send({ message: "Unexpected error" })
        }
    }

    public getMessages = async (req: Request, res: Response) => {
        try {
            const input: IGetMessagesInputDTO = {
                token: req.headers.authorization as string,
                user2_id: req.params.user2_id
            }

            const response = await this.userBusiness.getMessages(input);

            res.send(response);

        } catch (error) {
            if (error instanceof Error) {
                return res.status(res.statusCode).send({ message: error.message });
            }
            res.status(500).send({ message: "Unexpected error" })
        }
    }

    public getNotification = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string;

            const response = await this.userBusiness.GetNotification(token);

            res.send(response);

        } catch (error) {
            if (error instanceof Error) {
                return res.status(res.statusCode).send({ message: error.message });
            }
            res.status(500).send({ message: "Unexpected error" })
        }
    }

    public getContacts = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string;

            const response = await this.userBusiness.getContacts(token);

            res.send(response);
        } catch (error) {
            if (error instanceof Error) {
                return res.status(res.statusCode).send({ message: error.message });
            }
            res.status(500).send({ message: "Unexpected error" })
        }
    }
}