
console.log('Hello World! This is №1 laboratory work on functional programming. ')

startArray = [1,2,3,4,5,6];
startObjectsArray = [
    {
        isCat: 1,
        isRed: 0,
        isWhite: 1,
        isOrange: 0,
        isBlack: 0,
    },
    {
        isDog: 1,
        isRed: 0,
        isWhite: 0,
        isOrange: 1,
        isBlack: 0,
    },
    {
        isSparrow: 1,
        isRed: 1,
        isWhite: 0,
        isOrange: 0,
        isBlack: 0,
    },
]

//Только четные
function onlyEven(arr) {
    return arr.filter(a=>a%2==0)
}

const result = onlyEven(startArray)
console.log(result);

//Только квадраты
function squareNums(arr) {
    return arr.map(a=>a*a)
}
const result2 = squareNums(startArray)
console.log(result2);

//Только объекты с определенным свойством
function onlyOneProperty(objects, property) {
    return objects.filter(obj => obj[property] != null)
}

const result3 = onlyOneProperty(startObjectsArray, 'isRed')
const result4 = onlyOneProperty(startObjectsArray, 'isCat')
console.log('Объекты со свойством isRed:')
console.log(result3)
console.log('Объекты со свойством isCat:')
console.log(result4)

//Сумма чисел массива
function sumOfTheArray(arr) {
    return arr.reduce( (acc, current ) => acc + current, 0)
}
const result5 = sumOfTheArray(startArray);
console.log(result5);
console.log(startArray);

//Функция-робокоп и функция-помощник
function squareOneNum(num) {
    return num*num
}

function robot(someFunction, arr) {
    return arr.map( el => someFunction(el));
}
const result6 = robot(squareOneNum, startArray);
console.log('Функция-робот посчитала такой результат: ',result6);

//Используя разработанные функции, выполните математические операции
const r1 = sumOfTheArray(squareNums(onlyEven(startArray)))
console.log(r1);

//Среднее арифметическое всех чисел, больших заданного значения, в заданном массиве объектов.
//Предположим, что составитель задания имел ввиду найти среднее арифметическое среди значений объекта, нежели ключей объекта (key: value)
//В таком случае все значения ключей => numbers
startValue = 10
testObjects = [
    {
        rubles: 45,
        coins: 12
    },
    {
        rubles: 2,
        coins: 20
    },
    {
        rubles: 15,
        coins: 5
    },
    {
        rubles: 1,
        coins: 0,
    }
]

function averageNums(arr) {

    let count = 0
    let sum = 0

    for(let i = 0; i < arr.length; i++) {
        for (const key in arr[i]) {
            if (arr[i][key] > startValue) {
                count += 1
                sum += arr[i][key]
            }
        }
    }

    return sum / count

}

const r2 = averageNums(testObjects)
console.log(r2);

// arr.reduce( (acc, current) => current.values()
// .reduce( (acc2, current2) => current2 > startValue ? acc2 + current2 : acc2 , 0)
// ,0);

// arr.map(obj => obj.values().map(el => el > startValue))
