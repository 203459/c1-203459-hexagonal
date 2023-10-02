import { Request, Response } from "express";
import { UpdatePasswordUseCase } from "../../application/updatePasswordUseCase";

export class UpdateUserPasswordController {
    constructor(private readonly UpdatePasswordUseCase: UpdatePasswordUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const { uuid } = req.params;
            const { password } = req.body;

            const updatedUser = await this.UpdatePasswordUseCase.run(uuid, password);

            if (updatedUser) {
                return res.status(200).send({
                    status: "success",
                    data: updatedUser,
                    message: "Contraseña de usuario actualizada exitosamente",
                });
            }

            return res.status(404).send({
                status: "error",
                data: null,
                message: "No se encontró el usuario con el UUID ingresado",
            });
        } catch (error) {
            return res.status(500).send({
                status: "error",
                data: null,
                message: "Error al actualizar la contraseña del usuario",
            });
        }
    }
}