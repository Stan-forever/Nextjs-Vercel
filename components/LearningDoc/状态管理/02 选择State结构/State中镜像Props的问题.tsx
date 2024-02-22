'use client'

import { useState } from "react"

function Child({ parentValue }) {
    const [val, setVal] = useState(parentValue)
    const copyParentValue = parentValue
    return (
        <>
            <p>getParentValue: {copyParentValue}</p>
            <p>childVal: { val }</p>
            {/* <input type="text" value={val} onChange={(e) => setVal(e.target.value)}/> */}
        </>
        
    )
}

export default function MyApp() {
    const [text, setText] = useState('qwer')
    return (
        <>
            <Child parentValue={text} />
            <br />
            <input type="text" value={ text } onChange={(e) => setText(e.target.value)}/>
        </>
    )
} 