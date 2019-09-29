import PersianNumber from "./PersianNumber";

const {toGregorian} = require("./ExternalLibrary/DateTimeConversion");

export default class PersianDate {

    static monthNames = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];
    static weekNames = ['شنبه', 'یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه'];

    static getJalaliNow = () => PersianDate.convertDateTimeToJalali();

    static convertDateTimeToJalali(datetime?: any) {
        const gDate = !datetime ? new Date() :
            typeof datetime == 'object' ? datetime : new Date(datetime);

        if (gDate.toString() == "Invalid Date") {
            console.error(gDate);
            throw `Invalid Date`;
        }

        const jDate = gDate.toLocaleString('fa', {year: 'numeric', month: 'numeric', day: 'numeric', weekday: 'long'});
        const [weekday, parts] = jDate.split(' ');
        const [year, month, day] = PersianNumber.convertPersianNumberToEnglish(parts)
            .split('/').map(p => parseInt(p));
        return {year, month, day, weekday};
    }

    static convertDateTimeToJalaliString(datetime?: any, format = 'yyyy/mm/dd') {
        const {year, month, day, weekday} = PersianDate.convertDateTimeToJalali(datetime);

        return format
            .replace('mn', PersianDate.monthNames[month - 1])
            .replace('dw', weekday)
            .replace('sw', weekday[0])
            .replace('yyyy', year.toString())
            .replace('yy', (year % 100).toString())
            .replace('y', (year % 100).toString())
            .replace('mm', month.toString().padStart(2, '0'))
            .replace('m', month.toString())
            .replace('dd', day.toString().padStart(2, '0'))
            .replace('d', day.toString())
    }

    static convertJalaliToGregorian({year, month, day}: { year: number, month: number, day: number }) {
        const gDate = toGregorian(year, month, day);
        return new Date(gDate.gy, gDate.gm - 1, gDate.gd);
    }

    static getJalaliMonthFirstWeekDay(jalaliYear: number, jalaliMonth: number) {
        validateMonth(jalaliMonth);
        if(jalaliYear < 1300) jalaliYear += 1300;

        const kabisCount = Math.floor((jalaliYear - 1392) / 4),
            newDay = (jalaliYear - 1392 + kabisCount + 5) % 7;

        return (31 * (jalaliMonth - 1) + (jalaliMonth - 7 > 0 ? 7 - jalaliMonth : 0) + newDay) % 7;
    }

    static getJalaliMonthDaysCount( jalaliYear: number, jalaliMonth: number) {
        validateMonth(jalaliMonth);

        if(jalaliYear < 1300) jalaliYear += 1300;

        if (jalaliMonth == 0) {
            jalaliMonth = 12;
            jalaliYear--;
        }
        var kabise = (jalaliYear % 4 == 1);
        var mCount = (jalaliMonth > 6 ? 30 : 31);
        if (!kabise && jalaliMonth == 12) mCount = 29;
        return mCount;
    }


}


const validateMonth=(month:number)=>{
    if(month < 1)
        throw 'Month must be more than or equal to 1.';
    if(month > 12)
        throw 'Month must be less than or equal to 12.';
};