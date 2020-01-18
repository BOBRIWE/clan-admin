interface IPeriods {
    month: number
    week: number
    day: number
    hour: number
    minute: number
}


export default class DateFormatter {
    private _date: Date;
    constructor(dateString: string) {
        this._date = new Date(dateString);
    }

    get timeAgo() {
        const diff = Date.now() - this._date.getTime();
        const periods = DateFormatter.periodLength;


        if (diff > periods.month) {
            return Math.floor(diff / periods.month) + "month ago";
        } else if (diff > periods.week) {
            return Math.floor(diff / periods.week) + "w ago";
        } else if (diff > periods.day) {
            return Math.floor(diff / periods.day) + "d ago";
        } else if (diff > periods.hour) {
            return Math.floor(diff / periods.hour) + "h ago";
        } else if (diff > periods.minute) {
            return Math.floor(diff / periods.minute) + "min ago";
        }
        return "Just now";
    }


    static get periodLength(): IPeriods {
        return {
            month: 30 * 24 * 60 * 60 * 1000,
            week: 7 * 24 * 60 * 60 * 1000,
            day: 24 * 60 * 60 * 1000,
            hour: 60 * 60 * 1000,
            minute: 60 * 1000
        };
    }
}