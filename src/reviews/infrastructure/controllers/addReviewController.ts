import { Request, Response } from "express";
import { AddReviewUseCase } from "../../application/addReviewUseCase";
import { v4 as uuid } from "uuid";

export class addReviewControler {

    constructor(readonly AddReviewUseCase: AddReviewUseCase) { }

    async run(req: Request, res: Response) {
        try {
            let {
                userId, bookId, text,
            } = req.body

            const newUuid: string = uuid();
            const status = true;

            let createdReview = await this.AddReviewUseCase.run(
                newUuid, text, userId, bookId, status
            )

            if (createdReview) {
                return res.status(201).send({
                    status: "success",
                    data: {
                        review: createdReview
                    }
                });
            }
        } catch (error) {
            console.error("Error addBook:", error);
            return res.status(500).send({
                status: "error",
                data: [],
                message: "Error al agregar la reseña",
            });
        }
    }

}