import { User } from "../domain/user";
import { userRepository } from "../domain/userRepository";

export class UpdatePasswordUseCase {
    constructor(readonly userRepository: userRepository) { }

    async run(uuid: string, password: string): Promise<User | null> {

        try {
            const allUsers = await this.userRepository.updatePassword(uuid, password);

            return allUsers;
        } catch (error) {
            return null;
        }
    }
}