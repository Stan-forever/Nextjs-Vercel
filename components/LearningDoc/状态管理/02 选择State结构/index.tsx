'use client'

import { useState } from "react"

export default function MyApp() {
    const [answer, setAnswer] = useState('')
    const [status, setStatus] = useState('typing')

    const isPending = status === 'pending'
    const isSend = status === 'success'

    const mockFn = () => {
        return new Promise(resolve => {
            setTimeout(resolve, 2000)
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        setStatus('pending')
        await mockFn()
        setStatus('success')
    }

    if (isSend) {
        return (
            <p>You Answer is { answer }</p>
        )
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <h3>
                How was your stay at The Prancing Pony?
            </h3>
            <textarea value={answer} onChange={(e) => setAnswer(e.target.value)} disabled={isPending}/>
            <br />
            <button type="submit" disabled={isPending}>submit</button>
            {isPending && <p>sending</p>}
        </form>
    )
}