export class Review {
    constructor(
        public uuid: string,
        public text: string,
        public userId: string,
        public bookId: string,
        public status: boolean
    ) {

    }
}