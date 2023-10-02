import { User } from "../domain/user";
import { userRepository } from "../domain/userRepository";

export class GetAllUsersUseCase {
    constructor(readonly userRepository: userRepository) { }

    async run(): Promise<User[] | null> {

        try {
            const allUsers = await this.userRepository.allUsers();

            return allUsers;
        } catch (error) {
            return null;
        }
    }
}