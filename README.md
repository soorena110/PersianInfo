# PersianInfo

##Import

```js
import Persian from "persian-info";
```

##Persian Number

برای فرمت مقادیر و سپریتور گذاشتن

```js
Persian.number.formatPrice(458632); // "458,632"
Persian.number.unformatPrice("458,632"); // "458632";
```

برای تبدیل عدد به حروف

```js
Persian.number.numberToWords(754465 ); // "هفتصد و پنجاه و چهار هزار و چهارصد و شصت و پنج"
Persian.number.numberToWords(65437347436); // "شش میلیون میلیارد و پانصد و چهل و سه تریلیون و هفتصد و سی و چهار میلیارد و هفتصد و چهل و سه میلیون و ششصد و چهل و یک هزار و سیصد و بیست و چهار "
```

برای تبدیل عدد فارسی به انگلیسی و یا برعکس

```js
persian.number.convertEnglishNumberToPersian(214124); // "۲۱۴۱۲۴"
persian.number.convertEnglishNumberToPersian("214124"); // "۲۱۴۱۲۴"
Persian.number.convertPersianNumberToEnglish("۲۱۴۱۲۴"); // "214124"
```


##Persian Letter

برای مقایسه کلمات فارسی

```js
const m = 'محمد';
const mr = 'محمدرضا';
Persian.letter.compareString(m, mr); // -1, means mr is bigger
Persian.letter.compareString(mr, m); // 1, means mr is bigger
Persian.letter.compareString(m, m); // 0, means both are same

```
برای فیکس کردن حروف عربی در کلمات فارسی

```js
const myWord = 'علي';
Persian.letter.convertArabicCharsToPersianChars(myWord); // علی
// no chars like "يك‍دِبِزِذِِشِِسِى" any more.
```

##Persian Bill

برای گرفتن اطلاعات قبض از کلاس PersianBillExtractor استفاده کنید

```js
import PersianBillInfoExtractor from "../PersianBillInfoExtractor";

const paymentInfo = PersianBillInfoExtractor.getPaymentInfo(paymentId); // {billPrice, yearCode, period}

const billInfo = PersianBillInfoExtractor.getBillInfo(billId); // {serviceType, placeCode, subscribeNumber, serviceImage}
```
