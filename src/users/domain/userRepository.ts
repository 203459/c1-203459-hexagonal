import { User } from "./user";

export interface userRepository {
    register(
        uuid: string,
        name: string,
        lastName: string,
        email: string,
        tel: string,
        status: boolean,
        password: string,
    ): Promise<User | null>;

    update(
        uuid: string,
        name?: string,
        lastName?: string,
        tel?: string,
        email?: string
    ): Promise<User | null>;
/*
    filter(
        email?: string,
        name?: string,
        tel?: string
    ): Promise<User[] | null>;*/
    getById(uuid: string): Promise<User | null>;
    allUsers(): Promise<User[] | null>;
    deleteUser(uuid: String): Promise<string | null>;
    updatePassword(uuid: string, password: string): Promise<User | null>;
    /*login(email: string, password: string): Promise<string | null>;
    updatePassword(uuid: string, password: string): Promise<User | null>;
    allUsersDisabled(): Promise<User[] | User | null>;
    disableUser(uuid: string): Promise<string | null>;*/
}