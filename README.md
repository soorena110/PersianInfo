# PersianInfo
برای گرفتن اطلاعات قبض از کلاس PersianBillExtractor استفاده کنید

```js
import PersianBillInfoExtractor from "../PersianBillInfoExtractor";

const paymentInfo = PersianBillInfoExtractor.getPaymentInfo(paymentId); // {billPrice, yearCode, period}

const billInfo = PersianBillInfoExtractor.getBillInfo(billId); // {serviceType, placeCode, subscribeNumber}
```
