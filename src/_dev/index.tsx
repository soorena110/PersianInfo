import * as React from 'react';
import {render} from "react-dom";
import {PersianDate} from "../index";

(window as any).date = PersianDate;

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


// const test = (value: string) => {
//     console.log(value, '->', Persian.number.formatPrice(value));
// };


const test = (value?: string) => {
    const p = PersianDate.convertDateTimeToJalali(value);

    console.log(value, '---', PersianDate.convertJalaliToGregorian(p));
    console.warn(PersianDate.convertDateTimeToJalali(value));
};

test();
test('2019-07-29');
test('2019-07-28');
test('2020-02-26');
test('2020-06-03');

console.warn(PersianDate.convertDateTimeToJalali().format('hh:MM:ss'));
console.warn(PersianDate.convertDateTimeToJalali('2019-07-29').format( 'yy/m/d'));
console.warn(PersianDate.convertDateTimeToJalali('2019-07-29').format( 'd mn yy'));
console.warn(PersianDate.convertDateTimeToJalali('2019-07-29').format( 'dw dn d mn yy'));
console.warn(PersianDate.convertDateTimeToJalali('2019-07-29').format( 'sw d mn yy'));

function DemoApplication() {
    return <>
        open console in your browser
    </>
}

render(
    <DemoApplication/>,
    document.getElementById("root")
);


// @ts-ignore
module.hot.accept();
