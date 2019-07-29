import PersianBillInfoExtractor from "./PersianBillInfoExtractor";
import PersianNumber from "./PersianNumber";
import PersianLetter from "./PersianLetter";
import PersianDate from "./PersianDate";

const Persian = {
    bill: PersianBillInfoExtractor,
    number: PersianNumber,
    letter: PersianLetter,
    date: PersianDate
};

export default Persian

export {PersianBillInfoExtractor, PersianNumber, PersianLetter, PersianDate}