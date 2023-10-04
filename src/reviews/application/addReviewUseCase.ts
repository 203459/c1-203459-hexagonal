import { Review } from "../domain/review";
import { ReviewRepository } from "../domain/reviewRepository";

export class AddReviewUseCase {
    constructor(readonly ReviewRepository: ReviewRepository) { }

    async run(
        uuid: string,
        text: string,
        userId: string,
        bookId: string,
        status: boolean
    ): Promise<Review | string | null> {
        try {
        

            if (!text || !userId || !bookId) {
                return null;
            }

            const addReview = await this.ReviewRepository.addReview(uuid, text, userId, bookId, status);

            if (addReview === null) {
                return null;
            }

            return addReview;
        } catch (error) {
            return "Error al crear reseña";
        }
    }
}