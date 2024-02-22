'use client'
import { useState } from 'react'

import './index.css'

const Player = ({ name }: { name: string }) => {
    const [count, setCount] = useState(0)

    let className = 'counter'

    return (
        <>
            <div className={className}>
                <h3>{name}的分数:{count}</h3>
                <button onClick={() => setCount(count + 1)}>+1</button>     
            </div>
        </>
    )
}

export default function MyApp() {
    const [isNext, setIsNext] = useState(false)
    
    const handleNext = () => {
        setIsNext(!isNext)
    }
    return (
        <>
            { isNext ? (<Player key="Next" name="Next" />) : (<Player key="Jim" name="Jim" />)}
            <button onClick={handleNext}>下一位玩家</button>
        </>
    )
}