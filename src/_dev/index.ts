import PersianBillInfoExtractor from "../PersianBillInfoExtractor";

(window as any).PersianBillInfoExtractor = PersianBillInfoExtractor;

console.log(PersianBillInfoExtractor.getPaymentInfo(1234567890123));