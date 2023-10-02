import { User } from "../domain/user";
import { userRepository } from "../domain/userRepository";

export class DeleteUserUseCase {
    constructor(readonly userRepository: userRepository) { }

    async run(uuid: String): Promise<string | null> {

        try {
            const userDeleted = await this.userRepository.deleteUser(uuid);
            return userDeleted;
        } catch (error) {
            return null;
        }
    }
}