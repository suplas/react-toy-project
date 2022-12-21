export default class ContentItemModel{
    constructor(
        public seq: number,
        public title: string,
        public createHour: Date,
        public content: string,
    ){}
}