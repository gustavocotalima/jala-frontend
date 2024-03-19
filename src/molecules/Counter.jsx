import React from 'react'
import Button from '../atoms/Button'
import { useReducer } from 'react'

export default function Counter({ }) {
    const [count, setCount] = useReducer((x) => x + 1, 0)

    return (
        <div>
            <Button onClick={() => setCount()} label={"Add: " + count}/>
        </div>
    )
}