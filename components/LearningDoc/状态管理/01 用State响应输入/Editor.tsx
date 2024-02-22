'use client'


import { useState } from "react"

export default function MyApp() {
    const [firstName, setFirstName] = useState('Jane')
    const [lastName, setLastName] = useState('Jacobs')
    const [isEdit, setIsEdit] = useState(false)

    function Button() {
        if (isEdit) {
            return (
                <button onClick={() => setIsEdit(false)}>保存</button>
            )
        }
        else {
            return (
                <button onClick={() => setIsEdit(true)}>编辑</button>
            )
        }
    }

    return (
        <>
            <div>
                First name:
                {
                    isEdit ? <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}/> : `${firstName}` 
                }
            </div>
            <div>
                Last name:
                {
                    isEdit ? <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/> : `${lastName}` 
                }
            </div>
            <Button />
            Hello, {firstName} {lastName}
        </>
    )
}