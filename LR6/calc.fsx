open System

// Функции для математических операций
let add x y = x + y
let subtract x y = x - y
let multiply x y = x * y
let divide x y = x / y

let power x y = Math.Pow(x, y)
let sqrt x = Math.Sqrt(x)
let sin x = Math.Sin(x)
let cos x = Math.Cos(x)
let tan x = Math.Tan(x)

// Функции высшего порядка для обработки операций
let executeOperation operation x y =
    try
        Some(operation x y)
    with
    | :? DivideByZeroException ->
        printfn "Ошибка: Деление на ноль!"
        None
    | ex ->
        printfn "Ошибка: %s" ex.Message
        None

let executeUnaryOperation operation x =
    try
        Some(operation x)
    with
    | ex ->
        printfn "Ошибка: %s" ex.Message
        None

// Отображение меню
let displayMenu() =
    printfn "\n=== КАЛЬКУЛЯТОР ==="
    printfn "1. Сложение"
    printfn "2. Вычитание"
    printfn "3. Умножение"
    printfn "4. Деление"
    printfn "5. Возведение в степень"
    printfn "6. Квадратный корень"
    printfn "7. Синус"
    printfn "8. Косинус"
    printfn "9. Тангенс"
    printfn "0. Выход"
    printf "Выберите операцию: "

// Ввод чисел
let inputNumber prompt =
    printf "%s" prompt
    match Double.TryParse(Console.ReadLine()) with
    | true, num -> Some num
    | false, _ ->
        printfn "Ошибка: Введите корректное число!"
        None

// Функция для выполнения операций с двумя числами
let performBinaryOperation opName op =
    printfn $"\n--- {opName} ---"
    match inputNumber "Введите первое число: " with
    | Some x ->
        match inputNumber "Введите второе число: " with
        | Some y ->
            match executeOperation op x y with
            | Some result -> printfn $"Результат: {result}"
            | None -> ()
        | None -> ()
    | None -> ()

// Функция для выполнения операций с одним числом
let performUnaryOperation opName op =
    printfn $"\n--- {opName} ---"
    match inputNumber "Введите число: " with
    | Some x ->
        match executeUnaryOperation op x with
        | Some result -> printfn $"Результат: {result}"
        | None -> ()
    | None -> ()

// Главный цикл приложения
let rec mainLoop() =
    displayMenu()

    match Console.ReadLine() with
    | "1" ->
        performBinaryOperation "СЛОЖЕНИЕ" add
        mainLoop()
    | "2" ->
        performBinaryOperation "ВЫЧИТАНИЕ" subtract
        mainLoop()
    | "3" ->
        performBinaryOperation "УМНОЖЕНИЕ" multiply
        mainLoop()
    | "4" ->
        performBinaryOperation "ДЕЛЕНИЕ" divide
        mainLoop()
    | "5" ->
        performBinaryOperation "ВОЗВЕДЕНИЕ В СТЕПЕНЬ" power
        mainLoop()
    | "6" ->
        performUnaryOperation "КВАДРАТНЫЙ КОРЕНЬ" sqrt
        mainLoop()
    | "7" ->
        performUnaryOperation "СИНУС" sin
        mainLoop()
    | "8" ->
        performUnaryOperation "КОСИНУС" cos
        mainLoop()
    | "9" ->
        performUnaryOperation "ТАНГЕНС" tan
        mainLoop()
    | "0" ->
        printfn "До свидания!"
    | _ ->
        printfn "Неверный выбор! Попробуйте снова."
        mainLoop()

// Точка входа
printfn "Добро пожаловать в консольный калькулятор!"
mainLoop()