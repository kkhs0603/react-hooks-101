import React, { useState } from 'react'

const App = () => {
  //１番目の要素は０番目の要素を操作する。
  //price , setPrice 慣習
  const [count, setCount] = useState(0)
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count -1)
  const increment2 = () => setCount(previousCount => previousCount + 1)
  const reset = () => setCount(0)
  const double = () => setCount(previousCount => previousCount * 2)
  const divide3 = () => setCount(previousCount => {
    if(previousCount % 3 === 0){
      return previousCount / 3 
    }else{
      return previousCount
    }
  });
  return (
    // <> <React.Fragment> は同義
    <>
      <div className="App">count: {count}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={increment2}>+1</button>
      <div>
        <button onClick={reset}>reset</button>
        <button onClick={double}>x2</button>
        <button onClick={divide3}>3で割れる時だけ商を出す</button>

      </div>
    </>
  )
}

export default App;
