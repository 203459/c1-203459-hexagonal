import { User } from "../domain/user";
import { userRepository } from "../domain/userRepository";

export class RegisterUseCase {
    constructor(readonly userRepository: userRepository) {}

    async run(
        uuid: string,
        name: string,
        lastName: string,
        email: string,
        tel: string,
        password: string,
        status: boolean,
    ):Promise<User|null> {
        try {
            const addUser = await this.userRepository.register(uuid,name,lastName,email,tel,status,password);
            return addUser;
        }catch(error) {
            return null;
        }
    }
}