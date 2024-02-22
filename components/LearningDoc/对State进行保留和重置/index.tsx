'use client'
import { useState } from 'react'

import './index.css'

const Box = ({isFancy}: {isFancy: boolean}) => {
    const [count, setCount] = useState(0)
    const [hover, setHover] = useState(false)

    let className = 'counter'

    if (hover) {
        className += ' hover'
    }

    if (isFancy) {
        className += ' fancy'
    }

    return (
        <div className={className} onPointerEnter={() => setHover(true)} onPointerLeave={() => setHover(false)}>
            <div>
                <h1>{count}</h1>
            </div>
            <button onClick={() => {setCount(count + 1)}}>+1</button>
        </div>
    )
}

export default function MyApp() {
    const [showB, setShowB] = useState(true)
    const [isFancy, setIsFancy] = useState(false)
    return (
        <>
            <div style={{display: 'flex'}}>
                {isFancy ? (<Box isFancy={ true } />) : (<Box isFancy={ false } />)}
                {/* {showB && <Box />} */}
            </div>
            <label>
                <input type="checkbox" checked={ showB } onChange={() => setShowB(!showB)} />切换
            </label>
            <label>
                <input type="checkbox" checked={isFancy} onChange={() => setIsFancy(!isFancy)}/>使用好看的样式
            </label>
        </>
    )
}