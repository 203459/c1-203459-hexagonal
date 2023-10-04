import express from "express";
import {
    AddReviewController,
    GetReviewsController,
   /* DeleteReviewController,
    FilterUserController,
    GetInactiveReviewController,
    GetReviewController,
    GetReviewsController,
    InactivedReviewController,
    UpdateReviewsController*/
} from "./dependencies";

export const reviewRoutes = express.Router();

reviewRoutes.post('/add-review', AddReviewController.run.bind(AddReviewController));
reviewRoutes.get('/reviews', GetReviewsController.run.bind(GetReviewsController));