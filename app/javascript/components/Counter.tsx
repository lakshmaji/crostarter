import React, {useState} from 'react'

export default function Counter({name}) {
  const [counter, setCounter] = useState(10)

  const inc = () => {
    setCounter(p => p+1)
  }
  const dec = () => {
    setCounter(p => p-1)
  }
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={inc}>inc</button>
      <button onClick={dec}>dec</button>
   </>
  )
}
