import PersianNumber from "./PersianNumber";

const {toGregorian} = require("./ExternalLibrary/DateTimeConversion");

export default class PersianDate {

    static monthNames = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];

    static convertToJalaliObject(value?: any) {
        const gDate = !value ? new Date() :
            typeof value == 'object' ? value : new Date(value);

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

    static convertToJalaliString(value?: any, format = 'yyyy/mm/dd') {
        const {year, month, day, weekday} = PersianDate.convertToJalaliObject(value);

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
}
