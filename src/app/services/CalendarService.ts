import CalendarModel from "../models/CalendarModel";

const url = "";

const headers = {
    'Content-Type': 'application/json',
}

export default class CalendarService {
    private static _instance : CalendarService;
    private constructor(){}

    public static get instance() {
        return this._instance ?? (this._instance = new CalendarService())
    }
}