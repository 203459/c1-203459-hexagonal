import { Review } from "../domain/review";
import { ReviewRepository } from "../domain/reviewRepository";

export class getReviewsUseCase {
    constructor(readonly ReviewRepository: ReviewRepository) {}

    async run(): Promise<Review | Review[] | null> {
        try {
            const getReviews = await this.ReviewRepository.getReviews();

            return getReviews;
        } catch (error) {
            return null;
        }
    }
}