const billServiceTypes = {
    "1": "آب",
    "2": "برق",
    "3": "گاز",
    "4": "تلفن ثابت",
    "5": "تلفن همراه",
    "6": "عوارض شهرداری",
    "7": "سازمان مالیات",
    "8": "جرایم راهنمایی و رانندگی"
} as any;


export default class PersianBill {
    /**
     * returns information as {billPrice, yearCode, period}.
     * will return undefined if length of paymentId is less than 13
     */
    static getPaymentInfo(billId: string | number, paymentId: string | number) {
        if (typeof paymentId !== 'string')
            paymentId = paymentId.toString();
        if (typeof billId !== 'string')
            billId = billId.toString();

        if (!isValidPaymentId(paymentId, billId))
            return undefined;

        const billPrice = parseInt(paymentId.substring(0, paymentId.length - 5)) * 1000;
        const yearCode = 90 + parseInt(paymentId[paymentId.length - 5]);
        const period = paymentId.substr(paymentId.length - 4, 2);
        return {billPrice, yearCode, period}
    }

    /**
     * returns information as {serviceType, placeCode, subscribeNumber, serviceImage}.
     * will return undefined if length of billId is less than 13
     */
    static getBillInfo(billId: string | number) {
        if (typeof billId !== 'string')
            billId = billId.toString();
        if (!isValidBillId(billId))
            return undefined;

        const serviceTypeCode = billId[billId.length - 2];
        const serviceType = billServiceTypes[serviceTypeCode];
        const serviceImage = `https://raw.githubusercontent.com/soorena110/PersianInfo/master/images/${serviceTypeCode}.png`;
        const placeCode = billId.substr(billId.length - 5, 3);
        const subscribeNumber = billId.substr(0, billId.length - 5);

        return {serviceType, placeCode, subscribeNumber, serviceImage}
    }
}

const isValidPaymentId = (paymentId: string, billId: string) => {
    if (paymentId.length < 6 || paymentId.length > 13 || billId.length < 6 || billId.length > 13)
        return false;

    const checksum = compute11CheckSum(paymentId.substr(0, paymentId.length - 2));
    if (checksum != paymentId[paymentId.length - 2])
        return false;

    const paymentControlBit = computePaymentControlBit(paymentId.substr(0, paymentId.length - 1), billId);
    return paymentControlBit == paymentId[paymentId.length - 1];

};

const computePaymentControlBit = (paymentIdWithoutLastBit: string, billId: string) => {
    const removeRightZeros = (id: string) => {
        while (id[id.length - 1] == '0')
            id = id.substr(0, id.length - 1);
        return id;
    };

    const mergedPaymentIdAndBillIdWithoutRightZeros = removeRightZeros(billId) + removeRightZeros(paymentIdWithoutLastBit);
    return compute11CheckSum(mergedPaymentIdAndBillIdWithoutRightZeros);
};


const isValidBillId = (billId: string) => {
    if (billId.length < 6 || billId.length > 13)
        return false;

    const checksum = compute11CheckSum(billId.substr(0, billId.length - 1));
    return checksum == billId[billId.length - 1];
};
const compute11CheckSum = (billId: string) => {
    let sum = 0;
    for (let i = 0; i < billId.length; i++) {
        const coefficient = i % 6 + 2;
        const ithDigitFromLast = billId[billId.length - i - 1];
        sum += coefficient * Number(ithDigitFromLast);
    }

    const remainingOn11 = sum % 11;
    if (remainingOn11 == 0 || remainingOn11 == 1)
        return '0';
    return (11 - remainingOn11).toString();
};