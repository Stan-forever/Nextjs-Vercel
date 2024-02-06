import { useState } from "react"

export default function AddListCom({onAddTodo}: {onAddTodo: any}) {
    const [name, setName] = useState('')
    return (
        <>
            <input type="text" onChange={(e) => setName(e.target.value)} value={ name } />
            <button onClick={() => { setName('');  onAddTodo(name)}}>新增</button>
        </>
    )
}