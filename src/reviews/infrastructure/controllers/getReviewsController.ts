import { Request, Response } from "express";
import { getReviewsUseCase } from "../../application/getReviewsUseCase";

export class getReviewsController {

    constructor(readonly getReviewsUseCase: getReviewsUseCase) { }

    async run(req: Request, res: Response) {
        try {
            const reviews = await this.getReviewsUseCase.run();

            if (reviews) {
                return res.status(200).send({
                    status: "success",
                    data: {
                        reviews: reviews
                    }
                });
            } else {
                return res.status(404).send({
                    status: "error",
                    data: [],
                    message: "No se encontraron reseñas",
                });
            }
        } catch (error) {
            console.error("Error:", error);
            return res.status(500).send({
                status: "error",
                data: [],
                message: "Error al obtener reseñas",
            });
        }
    }
}