'use client'

import { useState } from "react"

interface ObjType {
    name: string
    age: number
}

export default function MyApp() {
    const [ obj, setObj ] = useState<ObjType>({ name: 'mike', age: 18 }) 
    return (
        <>
            <button onClick={() => setObj({ ...obj, age: obj.age + 1 })}>
                { obj.name }{ obj.age }
            </button>
        </>
    )
}
