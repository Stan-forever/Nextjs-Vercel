'use client'

import { useState } from 'react'

const Form = () => {
    const [text, setText] = useState('')
    return (
        <textarea value={text} onChange={(e) => setText(e.target.value)}></textarea>
    )
}

export default function MyApp() {
    const [showTip, setShowTip] = useState(false)

    return (
        <>
            {showTip && <p>所在城市</p> }
            <Form />
            <div>
                <button onClick={() => setShowTip(!showTip)}>{ `${showTip ? '隐藏' : '显示'}提示`}</button>
            </div>
        </>
    )
}