import React from 'react'
import type { FC } from 'react'
import Counter from '../components/Counter'

interface Props {
    name: string
}

const Hello: FC<Props> = ({name}) => {
  return (
    <div>
    <div>Hello {name}!</div>
    <Counter />
    </div>
  )
}

export default Hello