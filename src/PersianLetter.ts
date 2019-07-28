import {replaceFirstCharsWithSecondCharsInText} from "./_common";

const alphabetsOrder = 'آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهیئ';

export default class PersianLetter {
    static compareString(str1?: string, str2?: string) {
        str1 = PersianLetter.convertArabicCharsToPersianChars(str1);
        str2 = PersianLetter.convertArabicCharsToPersianChars(str2);
        if (!str2) return 1;
        if (!str1) return -1;

        for (let i = 0; i < Math.min(str1.length, str2.length); i++) {
            let ix1 = alphabetsOrder.indexOf(str1[i]);
            let ix2 = alphabetsOrder.indexOf(str2[i]);
            if (ix1 == -1) ix1 = str1.charCodeAt(i);
            if (ix2 == -1) ix2 = str2.charCodeAt(i);

            if (ix1 !== ix2)
                return ix1 > ix2 ? 1 : -1;
        }

        if (str1.length == str2.length)
            return 0;
        return str1.length > str2.length ? 1 : -1;
    }

    static convertArabicCharsToPersianChars(text?: string) {
        if (text == undefined)
            return undefined;

        replaceFirstCharsWithSecondCharsInText(text, "يك‍دِبِزِذِِشِِسِى", "یکدبزذشسی");

        return text;
    }
}

