'use client'

import { useState } from "react"

export default function MyApp() {
    const [answer, setAnswer] = useState('')
    const [error, setError] = useState<any>(null)
    const [status, setStatus] = useState('typing')

    if (status === 'success') {
        return <h1>You'are right!</h1>
    }

    async function handleSubmit (e: any) {
        e.preventDefault();
        setStatus('submitting')
        try {
            await submitForm(answer)
            setStatus('success')
        } catch (error) {
            setStatus('typing')
            setError(error as string)
            localStorage.setItem('err', error as string)
        }
    }
    
    const handleChange = (e: any) => {
        setAnswer(e.target.value)
    }
    return (
        <>
            <h2>Question</h2>
            <p>1 + 2 = ?</p>
            <form onSubmit={handleSubmit}>
                <textarea value={answer} disabled={ status === 'submitting' } onChange={handleChange}/>
                <br />
                <button disabled={status === 'submitting' || answer.length === 0} >提交</button>
                {error !== null &&
                    <p>{error.message}</p>
                }
            </form>
        </>
    )
}

const submitForm = (answer: number | string) => {
    return new Promise<void>((resolve, reject) => {
        setTimeout(() => {
            let shouldError = answer !== '3'
            if (shouldError) {
                reject(new Error('回答错误，请继续加油！'))
            }
            else {
                resolve()
            }
        }, 1000)
    })
}