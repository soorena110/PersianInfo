# PersianInfo
برای گرفتن اطلاعات قبض از کلاس PersianBillExtractor استفاده کنید

```js
import BillInfoExtractor from "../BillInfoExtractor";

const paymentInfo = BillInfoExtractor.getPaymentInfo(paymentId); // {billPrice, yearCode, period}

const billInfo = BillInfoExtractor.getBillInfo(billId); // {serviceType, placeCode, subscribeNumber}
```
