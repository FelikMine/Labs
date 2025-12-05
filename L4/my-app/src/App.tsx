import { useState } from 'react'
import './App.css'

function App() {

  const [num1, setNum1] = useState<string>('')
  const [num2, setNum2] = useState<string>('')
  const [result, setResult] = useState<number | null>(null)

  return (
    <>
      <div className='calculator'>
        <h1>Калькулятор</h1>
        <div className='numbers'>
          <input
            type="text"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            placeholder="Число 1"
          />
          <input
            type="text"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            placeholder="Число 2"
          />
        </div>
        <div className='buttons'>
            <button className='add' onClick={() => {
              const n1 = parseFloat(num1) || 0
              const n2 = parseFloat(num2) || 0
              setResult(n1 + n2)
            }}>Сложить</button>

            <button onClick={() => {
              const n1 = parseFloat(num1) || 0
              const n2 = parseFloat(num2) || 0
              setResult(n1 * n2)
            }}>Умножить</button>

            <button onClick={() => {
              const n1 = parseFloat(num1) || 0
              const n2 = parseFloat(num2) || 0
              setResult(n1 - n2)
            }}>Вычесть</button>

            <button onClick={() => {
              const n1 = parseFloat(num1) || 0
              const n2 = parseFloat(num2) || 0
              if (n2 === 0) setResult(NaN)
              else setResult(n1 / n2)
            }}>Поделить</button>

            <button onClick={() => {
              const n1 = parseFloat(num1) || 0
              const n2 = parseFloat(num2) || 0
              setResult(Math.pow(n1, n2))
            }}>В степень</button>

            <button className='square' onClick={() => {
              const n1 = parseFloat(num1) || 0
              setResult(Math.sqrt(n1))
            }}>Квадратный корень</button>

        </div>
        <h3> Результат: {result !== null ? result : '---'} </h3>
      </div>
    </>
  )
}

export default App