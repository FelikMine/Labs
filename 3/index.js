"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Hello World! Work 3!');
var startArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var startStringArray = ['mafia', 'detective', 'doctor', 'civilian'];
var startObjectsArray = [
    { name: 'Pelagius IV', age: 55, era: 1 },
    { name: 'Uriel VII', age: 40, era: 3 },
    { name: 'Jagar Tharn', age: 28, era: 3 },
    { name: 'Martin Septim', age: 68, era: 4 }
];
function onlyMultiples(arr, dividor) {
    return arr.filter(function (a) { return a % dividor === 0; });
}
var result1 = onlyMultiples(startArray, 3);
console.log('Числа кратные 3:');
console.log(result1);
function joinStrings(arr, separator) {
    return arr.join(separator);
}
var result2 = joinStrings(startStringArray, '_$_');
console.log('Объединенные строки:');
console.log(result2);
function sortByProperty(arr, property) {
    return __spreadArray([], arr, true).sort(function (a, b) {
        if (a[property] < b[property])
            return -1;
        if (a[property] > b[property])
            return 1;
        return 0;
    });
}
var result3 = sortByProperty(startObjectsArray, 'age');
console.log('Объекты, отсортированные по возрасту:');
console.log(result3);
var result4 = sortByProperty(startObjectsArray, 'era');
console.log('Объекты, отсортированные по score:');
console.log(result4);
function withLogging(func) {
    return (function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("\u0412\u044B\u0437\u043E\u0432 \u0444\u0443\u043D\u043A\u0446\u0438\u0438 ".concat(func.name, " \u0441 \u0430\u0440\u0433\u0443\u043C\u0435\u043D\u0442\u0430\u043C\u0438:"), args);
        var result = func.apply(void 0, args);
        console.log("\u0424\u0443\u043D\u043A\u0446\u0438\u044F ".concat(func.name, " \u0432\u0435\u0440\u043D\u0443\u043B\u0430:"), result);
        return result;
    });
}
// Создаем версию функции onlyMultiples с логированием
var loggedOnlyMultiples = withLogging(onlyMultiples);
var result5 = loggedOnlyMultiples(startArray, 3);
console.log('Результат функции onlyMultiples с логированием:');
console.log(result5);
// Создаем версию функции joinStrings с логированием
var loggedJoinStrings = withLogging(joinStrings);
var result6 = loggedJoinStrings(startStringArray, ', ');
console.log('Результат функции joinStrings с логированием:');
console.log(result6);
