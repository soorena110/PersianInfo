# PersianInfo

## Import

```js
import Persian from "persian-info";
```

## Persian Number

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


## Persian Letter

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


## Persian Date

تبدیل تاریخ میلادی به جلالی

```js
Persian.date.convertDateTimeToJalali(new Date()); // gives you {year, month, day, hours, minutes, seconds, weekday, weekdayName, format}
const d = Persian.date.convertDateTimeToJalali('2019-07-29'); // {year:1398, month:5, day:7, ...}
d.format('dw d mn') // ـ دوشنبه 7 مرداد


Persian.date.convertDateTimeToJalaliString(); // gives you current date in forman yyyy/mm/dd
Persian.date.convertDateTimeToJalaliString('2019-07-29'); // 1398/5/7
Persian.date.convertDateTimeToJalaliString('2019-07-29', 'yy/m/d'); // 98/5/7
Persian.date.convertDateTimeToJalaliString('2019-07-29', 'd mn yy'); // ـ 7 مرداد 98
Persian.date.convertDateTimeToJalaliString('2019-07-29', 'dw d mn yy'); // ـ دوشنبه 7 مرداد 98
Persian.date.convertDateTimeToJalaliString('2019-07-29', 'sw d mn yy'); // ـ د 7 مرداد 98
Persian.date.convertDateTimeToJalaliString('2019-07-29T15:08:07', 'hh hours MM mins ss secs !'); // 15 hours 08 mins 07 secs !
```
علامت ها :

y = year with one/two digits : 0 thorough 99
yy = year with two digits : 00 thorough 99
yyyy = year with two digits : ??00 thorough ??99 ex. 1379
m = month with one/two digits : 1 thorough 12
mm = month with two digits : 01 thorough 12
d = day with one/two digits : 1 thorough 31
dd = day with two digits : 01 thorough 31

h = hours with one/two digits : 0 thorough 59
hh = hours with two digits : 00 thorough 59
M = minutes with one/two digits : 0 thorough 59
MM = minutes with two digits : 00 thorough 59
s = seconds with one/two digits : 0 thorough 59
ss = seconds with two digits : 00 thorough 59

dw = the number of the day in week : 0 (saturday) thorough 6 (friday)
dn = the name of the day in week : شنبه or یکشنبه or دوشنبه or سه‌شنبه or etc.
ds = the first letter of the day in week : ش or ی or د or س or چ or پ or ج

تبدیل تاریخ جلالی به میلادی

```js
Persian.date.convertJalaliToGregorian({year:1398, month:5, day:7}); // returns an object of type `Date`
```

گرفتن تاریخ امروز به جلالی
```js
Persian.date.getJalaliNow(); // today's jalali date
```

گرفتن اولین روز هفته در یک ماه مشخص (مثلا اولین روز مهر 98 دوشنبه است.)

```js
Persian.date.getJalaliMonthFirstWeekDay(1398, 7); // 2
Persian.date.getJalaliMonthFirstWeekDay(98, 7); // 2
```

گرفتن تعداد روزهای یک ماه مشخص

```js
Persian.date.getJalaliMonthDaysCount(1398, 7); // 30
Persian.date.getJalaliMonthDaysCount(98, 12); // 29
Persian.date.getJalaliMonthDaysCount(98, 6); // 31
```

گرفتن مشخصات فارسی ماه و هفته
```js
Persian.date.monthNames; // ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند']
Persian.date.weekNames; // ['شنبه', 'یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه']
```

## Persian Bill

برای گرفتن اطلاعات قبض از کلاس PersianBillExtractor استفاده کنید

```js
const paymentInfo = Persian.bill.getPaymentInfo(paymentId); // {billPrice, yearCode, period}

const billInfo = Persian.bill.getBillInfo(billId); // {serviceType, placeCode, subscribeNumber, serviceImage}
```
