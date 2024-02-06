'use client'

import { useState } from "react"
import MyButton from "./MyButton"

export default function MyApp() {
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(count + 1)
    }

    return (
        <>
            <MyButton count={count} handleClick={handleClick} />
            <MyButton count={count} handleClick={handleClick}/>
        </>
    )
}