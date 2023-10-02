import { Request, Response } from "express";
import { GetAllUsersUseCase } from "../../application/getAllUsersUseCase";

export class GetAllUsersController {
    constructor(private readonly GetAllUsersUseCase: GetAllUsersUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const users = await this.GetAllUsersUseCase.run();

            if (users) {
                return res.status(200).send({
                    status: "success",
                    data: users,
                    message: "Usuarios recuperados correctamente",
                });
            }

            return res.status(404).send({
                status: "error",
                data: [],
                message: "No se encontraron usuarios",
            });
        } catch (error) {
            console.error("Error fetching all users:", error);
            return res.status(500).send({
                status: "error",
                data: [],
                message: "Error al recuperar usuarios",
            });
        }
    }
}