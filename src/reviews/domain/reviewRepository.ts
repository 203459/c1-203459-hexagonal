import { Review } from "./review";

export interface ReviewRepository {
    addReview(
        uuid: string,
        text: string,
        userId: string,
        bookId: string,
        status: boolean
    ): Promise<Review | null | string>

    getReviews(): Promise<Review | Review[] | null>

   /* getInactiveReview(): Promise<Review | null>

    filterUserReview(userId: string): Promise<Review[] | null>

    getReview(uuid: string): Promise<Review | null>

    deleteReview(uuid: string, userId: string): Promise<boolean>

    inactivedReview(uuid: string): Promise<string | null>

    updateReview(uuid: string, userId: string, text: string): Promise<Review | null | string>
*/
}