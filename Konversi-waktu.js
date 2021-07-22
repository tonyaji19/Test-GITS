function get24hTime(str){
    str = String(str).toLowerCase().replace(/\s/g, '');
    let has_am = str.indexOf('am') >= 0;
    let has_pm = str.indexOf('pm') >= 0;

    str = str.replace('am', '').replace('pm', '');

    if (str.indexOf(':') < 0) str = str + ':00';

    if (has_am) str += ' am';
    if (has_pm) str += ' pm';

    let d = new Date("1/1/2021 " + str);

    let doubleDigits = function(n){
        return (parseInt(n) < 10) ? "0" + n : String(n);
    };
    return doubleDigits(d.getHours()) + ':' + doubleDigits(d.getMinutes());
}

console.log(get24hTime('6')); // 06:00
console.log(get24hTime('6am')); // 06:00
console.log(get24hTime('6pm')); // 18:00
console.log(get24hTime('5:11pm')); // 17:11
console.log(get24hTime('6:11')); // 06:11
console.log(get24hTime('18')); // 18:00
console.log(get24hTime('17:11')); // 17:11