import PersianBill from "../PersianBillInfoExtractor";

console.warn('Bill ↓');
console.log(PersianBill.getBillInfo(8608748200140));
console.log(PersianBill.getBillInfo(1677036253));
console.log(PersianBill.getBillInfo(1677036252));

console.warn('Payment ↓');
console.log('8608748200140, 24050400', PersianBill.getPaymentInfo(8608748200140, 24050400));
console.log('8608748200140, 24050420', PersianBill.getPaymentInfo(8608748200140, 24050420));
console.log('8608748200140, 24050403', PersianBill.getPaymentInfo(8608748200140, 24050403));
console.log('8608748200141, 24050400', PersianBill.getPaymentInfo(8608748200141, 24050400));
console.log('8608748200130, 24050400', PersianBill.getPaymentInfo(8608748200130, 24050400));


console.warn('Payment ↓');
console.log('772263913142, 25100068', PersianBill.getPaymentInfo(772263913142, 25100068));
console.log('772263913142, 25100067', PersianBill.getPaymentInfo(772263913142, 25100067));
console.log('772263913142, 25100078', PersianBill.getPaymentInfo(772263913142, 25100078));
console.log('772263913143, 25100068', PersianBill.getPaymentInfo(772263913143, 25100068));
console.log('772263913132, 25100068', PersianBill.getPaymentInfo(772263913132, 25100068));
console.log('772263913124, 25100068', PersianBill.getPaymentInfo(772263913124, 25100068));
console.log('772263913124, 25100067', PersianBill.getPaymentInfo(772263913124, 25100067));