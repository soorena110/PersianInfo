import Persian from "../index";

(window as any).persian = Persian;

const test = (value: number) => {
    console.log(value, Persian.number.formatPrice(value));
    console.warn(Persian.number.numberToWords(value));
};

test(0);
test(1/0);
test(1);
test(55);
test(19);
test(332);
test(2134);
test(13456);
test(754465);
test(65437347436);
test(6543734743641324);