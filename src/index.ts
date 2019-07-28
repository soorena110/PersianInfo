import PersianBillInfoExtractor from "./PersianBillInfoExtractor";
import PersianNumber from "./PersianNumber";
import PersianLetter from "./PersianLetter";

const Persian = {
    bill: PersianBillInfoExtractor,
    number: PersianNumber,
    letter: PersianLetter
};

export default Persian

export {PersianBillInfoExtractor, PersianNumber, PersianLetter}