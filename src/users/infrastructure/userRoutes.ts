import express from "express";
import { deleteUserController, getAllUsersController, registerController, upadateController,} from "./dependencies";



export const userRoutes = express.Router();

userRoutes.post('/register',registerController.run.bind(registerController))
//userRoutes.post('/login',loginController.run.bind(loginController));
userRoutes.put('/id',upadateController.run.bind(upadateController))
userRoutes.get('/',getAllUsersController.run.bind(getAllUsersController))
userRoutes.delete('/:uuid',deleteUserController.run.bind(deleteUserController))
userRoutes.put('/reset_password',upadateController.run.bind(upadateController))
