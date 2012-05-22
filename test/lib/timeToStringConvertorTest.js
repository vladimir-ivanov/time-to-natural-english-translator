module("Module A");


test("Test getConvertedTime()", function () {

    var timeToStringInstance = new Visa.timeToStringConvertor(new Date(2011, 10, 7, 23, 58, 0));
    equal(timeToStringInstance.getConvertedTime(), 'just before midnight', 'Expects the time to match just before midnight for 23:58');

    timeToStringInstance = new Visa.timeToStringConvertor(new Date(2011, 10, 7, 23, 59, 0));
    equal(timeToStringInstance.getConvertedTime(), 'just before midnight', 'Expects the time to match just before midnight for 23:59');

    timeToStringInstance = new Visa.timeToStringConvertor(new Date(2011, 10, 7, 22, 59, 0));
    equal(timeToStringInstance.getConvertedTime(), 'just before eleven', 'Expects the time to match just before midnight for 22:59 - test just before');

    timeToStringInstance = new Visa.timeToStringConvertor(new Date(2011, 10, 7, 23, 30, 0));
    equal(timeToStringInstance.getConvertedTime(), 'half past eleven', 'Expects the time to match just before midnight for 23:30 - Test half past');

    timeToStringInstance = new Visa.timeToStringConvertor(new Date(2011, 10, 7, 10, 15, 0));
    equal(timeToStringInstance.getConvertedTime(), 'quarter past ten', 'Expects the time to match just before midnight for 10:15 - Test quarter past');

    timeToStringInstance = new Visa.timeToStringConvertor(new Date(2011, 10, 7, 10, 45, 0));
    equal(timeToStringInstance.getConvertedTime(), 'quarter to eleven', 'Expects the time to match just before midnight for 10:15 - Test quarter to');

    timeToStringInstance = new Visa.timeToStringConvertor(new Date(2011, 10, 7, 10, 48, 0));
    equal(timeToStringInstance.getConvertedTime(), '12 to eleven', 'Expects the time to match just before midnight for 10:48 - Test unmapped value');

    timeToStringInstance = new Visa.timeToStringConvertor(new Date(2011, 10, 7, 10, 48, 0));
    equal(timeToStringInstance.getConvertedTime(), '12 to eleven', 'Expects the time to match just before midnight for 10:48 - Test unmapped value');

    timeToStringInstance = new Visa.timeToStringConvertor(new Date(2011, 10, 7, 10, 00, 0));
    equal(timeToStringInstance.getConvertedTime(), 'ten o\'clock', 'Expects the time to match just before midnight for 10:48 - Test unmapped value');

});




