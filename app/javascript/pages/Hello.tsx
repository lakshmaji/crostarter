import React from 'react'
import type { FC } from 'react'
import Counter from '../components/Counter'

interface Props {
    name: string
}

export default function Hello({name}) {
  return (
    <div>
    <div>Hello {name}!</div>
    <Counter />
    </div>
  )
}
