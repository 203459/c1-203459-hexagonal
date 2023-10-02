import { MysqlUserRepository } from "./pgsqlUserRepository";
const mysqlUserRepository = new MysqlUserRepository();

import { RegisterController } from "./controllers/registerController";
import { RegisterUseCase } from "../application/registerUseCase";

const registerUseCase = new RegisterUseCase(mysqlUserRepository);
const registerController = new RegisterController(registerUseCase);

import { UpdateUseCase } from "../application/updateUseCase";
import { UpadateController } from "./controllers/updateController";

const updateUseCase = new UpdateUseCase(mysqlUserRepository);
const upadateController = new UpadateController(updateUseCase);

import { GetAllUsersUseCase } from "../application/getAllUsersUseCase";
import { GetAllUsersController } from "./controllers/getAllUsersController";

const getAllUsersUseCase = new GetAllUsersUseCase(mysqlUserRepository);
const getAllUsersController = new GetAllUsersController(getAllUsersUseCase);

import { DeleteUserUseCase } from "../application/deleteUserUseCase";
import { DeleteUserController } from "./controllers/deleteUserController";

const deleteUserUseCase = new DeleteUserUseCase(mysqlUserRepository);
const deleteUserController = new DeleteUserController(deleteUserUseCase);

import { UpdatePasswordUseCase } from "../application/updatePasswordUseCase";
import { UpdateUserPasswordController } from "./controllers/updatePassword";

const updatePasswordUseCase = new UpdatePasswordUseCase(mysqlUserRepository);
const updateUserPasswordController = new UpdateUserPasswordController(updatePasswordUseCase);


export {
    registerController,
    upadateController,
    getAllUsersController,
    deleteUserController,
    updateUserPasswordController,
};