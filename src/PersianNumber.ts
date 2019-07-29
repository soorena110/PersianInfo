import {replaceFirstCharsWithSecondCharsInText} from "./_common";

const thousands = ['', 'هزار', 'میلیون', 'میلیارد', 'تریلیون', 'میلیون میلیارد', 'میلیارد میلیارد'];
const hundreds = ['', 'صد', 'دویست', 'سیصد', 'چهارصد', 'پانصد', 'ششصد', 'هفتصد', 'هشتصد', 'نهصد'];
const tens = ['', 'ده', 'بیست', 'سی', 'چهل', 'پنجاه', 'شصت', 'هفتاد', 'هشتاد', 'نود'];
const ones = ['', 'یک', 'دو', 'سه', 'چهار', 'پنج', 'شش', 'هفت', 'هشت', 'نه'];
const teens = ['ده', 'یازده', 'دوازده', 'سیزده', 'چهارده', 'پانزده', 'شانزده', 'هفده', 'هجده', 'نوزده'];
const infinite = 'بینهایت';
const zero = 'صفر';

const farsiNumbers = '۰۱۲۳۴۵۶۷۸۹';
const englishNumber = '0123456789';

export default class PersianNumber {
    static formatPrice(value?: number) {
        if (value === undefined || isNaN(value))
            return '';

        const valueString = value.toString();
        const pricision = valueString.split('.')[1];
        const val = parseFloat(valueString.split('.')[0]).toFixed(0).replace('.', ',');
        const integer = val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        return integer + (pricision !== undefined ? '.' + pricision : '');
    }

    static unformatPrice(value: string) {
        return value.replace(/,/g, '');
    }

    static numberToWords(value: number) {
        const [beforeSeperator, afterSeperator] = value.toString().split('.');

        let result = numberToWords(parseInt(beforeSeperator));
        if (afterSeperator)
            result += ' ممیز ' + numberToWords(parseInt(afterSeperator));

        return result;
    }

    static convertPersianNumberToEnglish(str: string) {
        return replaceFirstCharsWithSecondCharsInText(str, farsiNumbers, englishNumber);
    }

    static convertEnglishNumberToPersian(str: string | number) {
        if (typeof str == "number")
            str = str.toString();
        return replaceFirstCharsWithSecondCharsInText(str, englishNumber, farsiNumbers);
    }
}


const splitTousands = (value: number) => {
    const parts = [];
    while (value > 0) {
        parts.push(value % 1000);
        value = Math.floor(value / 1000);
    }
    return parts;
};

const convertValueBelowTousandToWord = (value: number) => {
    if (value >= 10 && value < 20)
        return teens[value - 10];

    const hundred = hundreds[Math.floor(value / 100)];
    const ten = tens[Math.floor(value % 100 / 10)];
    const one = ones[Math.floor(value % 10)];

    const ret = [];
    if (hundred) ret.push(hundred);
    if (ten) ret.push(ten);
    if (one) ret.push(one);
    return ret.join(' و ');
};

const numberToWords = (value: number) => {
    if (isNaN(value)) return '';
    if (!isFinite(value)) return infinite;
    if (value == 0) return zero;

    const splittedByTousands = splitTousands(value);
    return splittedByTousands.map((r, ix) => {
        const underThousand = convertValueBelowTousandToWord(r);
        if (underThousand == 'یک')
            return thousands[ix]
        return underThousand + ' ' + thousands[ix];
    }).reverse().join(' و ');
};
