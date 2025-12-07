let add x y = x + y

let subtract x y = x - y

let multiply x y = x * y

let divide x y = x / y

let rec factorial n =
    if n <= 1 then 1
    else n * factorial (n - 1)

let addFive = add 5
let multiplyByThree = multiply 3

printfn "Сумма 5 и 3: %d" (add 5 3)
printfn "Разность 10 и 4: %d" (subtract 10 4)
printfn "Произведение 6 и 7: %d" (multiply 6 7)
printfn "Деление 15 на 3: %d" (divide 15 3)
printfn "Факториал 5: %d" (factorial 5)
printfn "Добавить пять к 10: %d" (addFive 10)
printfn "Умножить 7 на три: %d" (multiplyByThree 7)