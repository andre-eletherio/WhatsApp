import { IFindByUsersIdsInputDTO, IFriendsDB, INewMessageFalseInputDTO, INewMessageTrueInputDTO } from "../model/Friends";
import { BaseDatabase } from "./BaseDatabase";

export class FriendsDatabase extends BaseDatabase {
    public static TABLE_FRIENDS = "friends";

    public addFriend = async (input: IFriendsDB) => {
        let {id, user1_id, user2_id} = input;
        if (+user1_id > +user2_id){
            const tmp = user1_id;
            user1_id = user2_id;
            user2_id = tmp;
        }
        await BaseDatabase
            .connection(FriendsDatabase.TABLE_FRIENDS)
            .insert({id, user1_id, user2_id});
    }

    public findById = async (id: string) => {
        const response = await BaseDatabase
            .connection(FriendsDatabase.TABLE_FRIENDS)
            .select()
            .where({ id })
        return response[0];
    }

    public findByUsersIds = async (input: IFindByUsersIdsInputDTO) => {
        const { user1_id, user2_id } = input;
        // console.log(user1_id, user2_id)
        const response = await BaseDatabase
            .connection(FriendsDatabase.TABLE_FRIENDS)
            .select()
            .where({ user1_id })
            .andWhere({ user2_id })
        return response[0];
    }

    public newMessageTrue = async (user1_id: number, user2_id: number, receiver: number) => {

        if (+user1_id == receiver) {
            await BaseDatabase
                .connection(FriendsDatabase.TABLE_FRIENDS)
                .update({ new_messages_left: true })
                .where({ user1_id }).andWhere({ user2_id })
        } else {
            await BaseDatabase
                .connection(FriendsDatabase.TABLE_FRIENDS)
                .update({ new_messages_rigth: true })
                .where({ user1_id }).andWhere({ user2_id })
        }
    }

    public newMessageFalse = async (user1_id: number, user2_id: number, receiver: number) => {

        if (+user1_id == receiver) {
            await BaseDatabase
                .connection(FriendsDatabase.TABLE_FRIENDS)
                .update({ new_messages_left: false })
                .where({ user1_id }).andWhere({ user2_id })
        } else {
            await BaseDatabase
                .connection(FriendsDatabase.TABLE_FRIENDS)
                .update({ new_messages_rigth: false })
                .where({ user1_id }).andWhere({ user2_id })
        }
    }

    public getFriends = async (user_id: number) => {
        const [response] = await BaseDatabase
            .connection.raw(`
            select name, user2_id as user_id, user1_id as receiver, new_messages_left, new_messages_rigth, talked_before, last_message from friends join users on friends.user2_id = users.id where talked_before and user1_id = ${user_id}
            union
            select name, user1_id as user_id, user2_id as receiver, new_messages_left, new_messages_rigth, talked_before, last_message from friends join users on friends.user1_id = users.id where talked_before and user2_id = ${user_id} order by last_message desc;
        `)
        return response;
    }

    public getContacts = async (user_id: number) => {
        const [response] = await BaseDatabase
            .connection.raw(`
            select name, user2_id as user_id, new_messages_left, new_messages_rigth, talked_before from friends join users on friends.user2_id = users.id where user1_id = ${user_id}
            union
            select name, user1_id, new_messages_left, new_messages_rigth, talked_before from friends join users on friends.user1_id = users.id where user2_id = ${user_id} order by name;
            `)
        return response;
    }
}