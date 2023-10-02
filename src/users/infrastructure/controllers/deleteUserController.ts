import { Request, Response } from "express";
import { DeleteUserUseCase } from "../../application/deleteUserUseCase";

export class DeleteUserController {
    constructor(private readonly deleteUserUseCase: DeleteUserUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const { uuid } = req.params;

            const deletedUserId = await this.deleteUserUseCase.run(uuid);

            if (deletedUserId) {
                return res.status(200).send({
                    status: "success",
                    data: {
                        id: deletedUserId,
                    },
                    message: "El usuario ha sido eliminado exitosamente",
                });
            }

            return res.status(404).send({
                status: "error",
                data: [],
                message: "No se encontró el usuario con el UUID ingresado",
            });
        } catch (error) {
            console.error("Error deleting user:", error);
            return res.status(500).send({
                status: "error",
                data: [],
                message: "Error al eliminar el usuario",
            });
        }
    }
}