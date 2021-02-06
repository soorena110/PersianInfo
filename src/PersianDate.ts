import {toJalaali} from "ExternalLibrary/DateTimeConversion";

const {toGregorian} = require("./ExternalLibrary/DateTimeConversion");

export default class PersianDate {

    static monthNames = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];
    static weekNames = ['شنبه', 'یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه'];

    static getJalaliNow = () => PersianDate.convertDateTimeToJalali();

    static convertDateTimeToJalali(datetime?: Date | string | number) {
        const gDate = !datetime ? new Date() :
            typeof datetime == 'object' ? datetime : new Date(datetime);

        if (gDate.toString() == "Invalid Date") {
            console.error(gDate);
            throw `Invalid Date`;
        }


        const {jd: day, jm: month, jy: year} = toJalaali(gDate.getFullYear(), gDate.getMonth() + 1, gDate.getDate());
        const gDateValue = gDate.valueOf() + 3.5 * 3600 * 1000;
        const weekday = Math.floor(gDateValue / 1000 / 3600 / 24 + 5) % 7;
        const weekdayName = PersianDate.weekNames[weekday];

        const totalSeconds = gDateValue / 1000;
        const totalMinutes = totalSeconds / 60;
        const totalHours = totalMinutes / 60;
        const hours = Math.floor(totalHours % 24);
        const minutes = Math.floor(totalMinutes % 60);
        const seconds = Math.floor(totalSeconds % 60);

        return {
            year, month, day, weekday, weekdayName, hours, minutes, seconds,
            format(format = 'yyyy/mm/dd') {
                return format.replace('mn', PersianDate.monthNames[month - 1])
                    .replace('dn', weekdayName)
                    .replace('dw', weekday.toString())
                    .replace('ds', weekdayName[0])
                    .replace('yyyy', year.toString())
                    .replace('yy', (year % 100).toString().padStart(2, '0'))
                    .replace('y', (year % 100).toString())
                    .replace('mm', month.toString().padStart(2, '0'))
                    .replace('m', month.toString())
                    .replace('dd', day.toString().padStart(2, '0'))
                    .replace('d', day.toString())
                    .replace('hh', hours.toString().padStart(2, '0'))
                    .replace('h', hours.toString())
                    .replace('MM', minutes.toString().padStart(2, '0'))
                    .replace('M', minutes.toString())
                    .replace('ss', seconds.toString().padStart(2, '0'))
                    .replace('s', seconds.toString())
            }
        };
    }

    static convertJalaliToGregorian({year, month, day}: { year: number, month: number, day: number }) {
        const gDate = toGregorian(year, month, day);
        return new Date(gDate.gy, gDate.gm - 1, gDate.gd);
    }

    static getJalaliMonthFirstWeekDay(jalaliYear: number, jalaliMonth: number) {
        validateMonth(jalaliMonth);
        if (jalaliYear < 1300) jalaliYear += 1300;

        const kabisCount = Math.floor((jalaliYear - 1392) / 4),
            newDay = (jalaliYear - 1392 + kabisCount + 5) % 7;

        return (31 * (jalaliMonth - 1) + (jalaliMonth - 7 > 0 ? 7 - jalaliMonth : 0) + newDay) % 7;
    }

    static getJalaliMonthDaysCount(jalaliYear: number, jalaliMonth: number) {
        validateMonth(jalaliMonth);

        if (jalaliYear < 1300) jalaliYear += 1300;

        if (jalaliMonth == 0) {
            jalaliMonth = 12;
            jalaliYear--;
        }
        const kabise = (jalaliYear % 4 == 1);
        let mCount = (jalaliMonth > 6 ? 30 : 31);
        if (!kabise && jalaliMonth == 12) mCount = 29;
        return mCount;
    }


}


const validateMonth = (month: number) => {
    if (month < 1)
        throw 'Month must be more than or equal to 1.';
    if (month > 12)
        throw 'Month must be less than or equal to 12.';
};
