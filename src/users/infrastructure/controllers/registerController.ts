import { Request, Response } from "express";
import { RegisterUseCase } from "../../application/registerUseCase";
import { v4 as uuid } from "uuid";

export class RegisterController {

    constructor(readonly register: RegisterUseCase) { }

    async run(req: Request, res: Response) {
        try {
            let {
                name,
                lastName,
                tel,
                email,
                password,
            } = req.body

            const newUuid: string = uuid()
            const status = true

            let createdUser = await this.register.run(
                newUuid,
                name,
                lastName,
                email,
                tel,
                password,
                status
            )

            if (createdUser) {
                return res.status(201).send({
                    status: "success",
                    data: {
                        id: createdUser.uuid,
                        title: createdUser.name
                    },
                    message: "El usuario ha sido creado exitosamente"
                });
            }

            res.status(400).send({
                status: "error",
                data: [],
                //TODO: implementar validaciones
                validations: [],
                message: "Error al crear el usuario"
            });
        } catch (error) {
            return null;
        }
    }

}