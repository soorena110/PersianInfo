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

export default class PersianBillInfoExtractor {
    /**
     * returns information as {billPrice, yearCode, period}.
     * will return undefined if length of paymentId is less than 13
     */
    static getPaymentInfo(paymentId: string | number) {
        if (typeof paymentId !== 'string')
            paymentId = paymentId.toString();
        if (paymentId.length < 13)
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
        if (billId.length < 13)
            return undefined;

        const serviceTypeCode = billId[billId.length - 2];
        const serviceType = billServiceTypes[serviceTypeCode];
        const serviceImage =  `https://raw.githubusercontent.com/soorena110/PersianInfo/master/images/${serviceTypeCode}.png`;
        const placeCode = billId.substr(billId.length - 5, 3);
        const subscribeNumber = billId.substr(0, billId.length - 5);

        return {serviceType, placeCode, subscribeNumber, serviceImage}
    }
}