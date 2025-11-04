console.log('Hello World! Work 3!');

const startArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const startStringArray: string[] = ['mafia', 'detective', 'doctor', 'civilian'];
const startObjectsArray: { name: string; age: number; era: number }[] = [
    { name: 'Pelagius IV', age: 55, era: 1 },
    { name: 'Uriel VII', age: 40, era: 3 },
    { name: 'Jagar Tharn', age: 28, era: 3 },
    { name: 'Martin Septim', age: 68, era: 4 }
];

function onlyMultiples(arr: number[], dividor: number): number[] {
    return arr.filter(a => a % dividor === 0);
}

const result1 = onlyMultiples(startArray, 3);
console.log('Числа кратные 3:');
console.log(result1);

function joinStrings(arr: string[], separator: string): string {
    return arr.join(separator);
}

const result2 = joinStrings(startStringArray, '_$_');
console.log('Объединенные строки:');
console.log(result2);

function sortByProperty<T>(arr: T[], property: keyof T): T[] {
    return [...arr].sort((a, b) => {
        if (a[property] < b[property]) return -1;
        if (a[property] > b[property]) return 1;
        return 0;
    });
}

const result3 = sortByProperty(startObjectsArray, 'age');
console.log('Объекты, отсортированные по возрасту:');
console.log(result3);

const result4 = sortByProperty(startObjectsArray, 'era');
console.log('Объекты, отсортированные по score:');
console.log(result4);

function withLogging<F extends (...args: any[]) => any>(func: F): F {
    return ((...args: Parameters<F>): ReturnType<F> => {
        console.log(`Вызов функции ${func.name} с аргументами:`, args);
        const result = func(...args);
        console.log(`Функция ${func.name} вернула:`, result);
        return result;
    }) as F;
}

// Создаем версию функции onlyMultiples с логированием
const loggedOnlyMultiples = withLogging(onlyMultiples);
const result5 = loggedOnlyMultiples(startArray, 3);
console.log('Результат функции onlyMultiples с логированием:');
console.log(result5);

// Создаем версию функции joinStrings с логированием
const loggedJoinStrings = withLogging(joinStrings);
const result6 = loggedJoinStrings(startStringArray, ', ');
console.log('Результат функции joinStrings с логированием:');
console.log(result6);


export {};