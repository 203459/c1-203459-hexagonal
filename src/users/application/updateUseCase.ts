import { User } from "../domain/user";
import { userRepository } from "../domain/userRepository";

export class UpdateUseCase {
    constructor(readonly userRepository: userRepository) {}

    async run(
        uuid: string,
        name?: string,
        lastName?: string,
        tel?: string,
        email?: string
        ): Promise<User | null> {
        try {
            const existisUser = await this.userRepository.getById(uuid);
            if (!existisUser) {
                return null;
            }

            const updateUserById = await this.userRepository.update(uuid,name,lastName,tel,email);
            return updateUserById;
        } catch (error) {
            return null;
        }
    }
}