'use client'
import { useState } from 'react'

const Field = ({ title }: { title: string }) => {
    const [text, setText] = useState('')

    return (
        <label>
            {title}
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        </label>
    )
}

export default function MyApp() {
    const [isReverse, setIsReverse] = useState(false)
    
    const handleReverse = () => {
        setIsReverse(!isReverse)
    }

    return (
        <>
            {
                isReverse ? (
                    <>
                        <Field key='姓氏' title="姓氏" />
                        <br />
                        <Field key="名字" title="名字" /> 
                    </>
                ) : (
                    <>
                        <Field key="名字" title="名字" />
                        <br />
                        <Field key='姓氏' title="姓氏" />
                    </>
              )
            }
            
            <br />
            <button onClick={handleReverse}>
                切换顺序
            </button>
        </>
    )
}