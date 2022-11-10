import { IGetMessagesInputDBDTO, ISendMessageInputDBDTO } from "../model/Messages";
import { BaseDatabase } from "./BaseDatabase";

export class MessagesDatabase extends BaseDatabase {
    public static TABLE_MESSAGES = "messages";
    public static TABLE_NOTIFICATION = "user_new_message";
    public static TABLE_FRIENDS = "friends";

    public sendMessage = async (input: ISendMessageInputDBDTO) => {
        const { user1_id, user2_id, message, receiver } = input;
        await BaseDatabase
            .connection(MessagesDatabase.TABLE_MESSAGES)
            .insert({ user1_id, user2_id, message, receiver: receiver });
        await BaseDatabase
            .connection(MessagesDatabase.TABLE_FRIENDS)
            .update({talked_before: true, last_message: new Date().getTime()})
            .where({user1_id}).andWhere({user2_id})
            .orWhere({user1_id: user2_id}).andWhere({user2_id: user1_id})
    }

    public getNotifications = async (user_id: number) => {
        const [users] = await BaseDatabase
            .connection.raw(`
                select user1_id as user_id from messages
                where receiver = ${user_id} and user1_id != ${user_id} and user2_id = ${user_id}
                UNION ALL
                select user2_id from messages
                where receiver = ${user_id} and user2_id != ${user_id} and user1_id = ${user_id};
            `)
        return users;
    }

    public getMessages = async (input: IGetMessagesInputDBDTO) => {
        const { user1_id, user2_id } = input;
        const messages = await BaseDatabase
            .connection(MessagesDatabase.TABLE_MESSAGES)
            .select()
            .orderBy("id", "desc")
            .where({ user1_id })
            .andWhere({ user2_id })
        return messages;
    }

    public messagesSeenTrue = async (id: number) => {
        await BaseDatabase
            .connection(MessagesDatabase.TABLE_MESSAGES)
            .update({ seen: true })
            .where({ id })
    }

    public setNotificationFalse = async (user1_id: number) => {
        await BaseDatabase
            .connection(MessagesDatabase.TABLE_NOTIFICATION)
            .update({ new_messages: false })
            .where({ user1_id })
    }

    public setNotificationTrue = async (id: number) => {
        await BaseDatabase
            .connection(MessagesDatabase.TABLE_NOTIFICATION)
            .update({ new_messages: true })
            .where({ user1_id: id })
    }

    public getNotification = async (user1_id: number) => {
        const newMessages = await BaseDatabase
            .connection(MessagesDatabase.TABLE_NOTIFICATION)
            .select("new_messages")
            .where({user1_id})
        // console.log(newMessages);
        return newMessages;
    }
}