import { MysqlReviewRepository } from "./pgsqlReviewRepository";
const mysqlReviewRepository= new MysqlReviewRepository();

import { addReviewControler } from "./controllers/addReviewController";
import { AddReviewUseCase } from "../application/addReviewUseCase";

const addReviewUseCase = new AddReviewUseCase(mysqlReviewRepository);
const AddReviewController = new addReviewControler(addReviewUseCase);

import { getReviewsController } from "./controllers/getReviewsController";
import { getReviewsUseCase } from "../application/getReviewsUseCase";

const GetReviewsUseCase = new getReviewsUseCase(mysqlReviewRepository);
const GetReviewsController = new getReviewsController(GetReviewsUseCase);

/*import { deleteReviewController } from "./controller/deleteReviewController";
import { deleteReviewUseCase } from "../aplicattion/deleteReviewUseCase";

const DeleteReviewUseCase = new deleteReviewUseCase(mysqlReviewRepository);
const DeleteReviewController = new deleteReviewController(DeleteReviewUseCase);

import { filterUserController } from "./controller/filterUserReviewController";
import { filterUserReviewUseCase } from "../aplicattion/filterUserReviewUseCase";

const FilterUserReviewUseCase = new filterUserReviewUseCase(mysqlReviewRepository);
const FilterUserController = new filterUserController(FilterUserReviewUseCase);

import { getInactiveReviewController } from "./controller/getInactiveReviews";
import { getInactiveReviewUseCase } from "../aplicattion/getInactiveReviewUsecase";

const GetInactiveReviewUseCase = new getInactiveReviewUseCase(mysqlReviewRepository);
const GetInactiveReviewController = new getInactiveReviewController(GetInactiveReviewUseCase);

import { getReviewsController } from "./controller/getReviewsController";
import { getReviewsUseCase } from "../aplicattion/getReviewsUseCase";

const GetReviewsUseCase = new getReviewsUseCase(mysqlReviewRepository);
const GetReviewsController = new getReviewsController(GetReviewsUseCase);

import { inactivateReviewController } from "./controller/inactiveReviewController";
import { inactivedReviewUseCase } from "../aplicattion/inactivedReviewUseCase";

const InactivedReviewUseCase = new inactivedReviewUseCase(mysqlReviewRepository);
const InactivedReviewController = new inactivateReviewController(InactivedReviewUseCase);

import { getReviewController } from "./controller/getReviewController";
import { getReviewUseCase } from "../aplicattion/getReviewUseCase";

const GetReviewUseCase = new getReviewUseCase(mysqlReviewRepository);
const GetReviewController = new getReviewController(GetReviewUseCase);

import { updateReviewController } from "./controller/updateReviewController";
import { updateReviewUseCase } from "../aplicattion/updateReviewUseCase";

const UpdateReviewUseCase = new updateReviewUseCase(mysqlReviewRepository);
const UpdateReviewsController = new updateReviewController(UpdateReviewUseCase);
*/
export {
    AddReviewController,
    GetReviewsController,
   /* DeleteReviewController,
    FilterUserController,
    GetInactiveReviewController,
    GetReviewController,
    GetReviewsController,
    InactivedReviewController,
    UpdateReviewsController*/
};