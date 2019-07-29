import Persian from "../index";

(window as any).persian = Persian;

// const test = (value: number) => {
//     console.log(value, Persian.number.formatPrice(value));
//     console.warn(Persian.number.numberToWords(value));
// };
// test(0);
// test(1/0);
// test(1);
// test(55);
// test(19);
// test(332);
// test(2134);
// test(13456);
// test(754465);
// test(65437347436);
// test(6543734743641324);


// const test = (value?: string) => {
//     const p = Persian.date.convertToJalaliObject(value);
//
//     console.log(value, '---', Persian.date.convertJalaliToGregorian(p));
//     console.warn(Persian.date.convertToJalaliString(value));
// };
//
// test();
// test('2019-07-29');
// test('2019-07-28');
// test('2020-02-26');
// test('2020-06-03');

console.warn(Persian.date.convertToJalaliString());
console.warn(Persian.date.convertToJalaliString('2019-07-29', 'yy/m/d'));
console.warn(Persian.date.convertToJalaliString('2019-07-29', 'd mn yy'));
console.warn(Persian.date.convertToJalaliString('2019-07-29', 'dw d mn yy'));
console.warn(Persian.date.convertToJalaliString('2019-07-29', 'sw d mn yy'));