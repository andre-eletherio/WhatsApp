import { Router } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserController } from "../controller/UserController";
import { FriendsDatabase } from "../database/FriendsDatabase";
import { MessagesDatabase } from "../database/MessagesDatabase";
import { UserDatabase } from "../database/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export const userRouter = Router();

const userController = new UserController(
    new UserBusiness(
        new UserDatabase(),
        new HashManager(),
        new IdGenerator(),
        new Authenticator(),
        new FriendsDatabase(),
        new MessagesDatabase()
    )
);

userRouter.post("/signup", userController.signUp);
userRouter.post("/login", userController.login);
userRouter.post("/friends", userController.addFriend);
userRouter.post("/sendMessage/:user_id", userController.sendMessage);
userRouter.get("/friends", userController.getNotifications);
userRouter.get("/messages/:user2_id", userController.getMessages);
userRouter.get("/notification", userController.getNotification);
userRouter.get("/contacts", userController.getContacts);