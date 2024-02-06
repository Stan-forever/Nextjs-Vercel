'use client'

import { useState } from "react"
import { ListDataType } from './index'

function Task({ item, handleChange, onDelete }: { item: ListDataType, handleChange: any, onDelete: any }) {
    const [isEdit, setIsEdit] = useState(false)
    let content
    if (isEdit) {
        content = (
            <>
                <input type="text" value={item.name} onChange={e => { handleChange({ ...item, name: e.target.value }) }} />
                <button onClick={() => setIsEdit(false)}>保存</button>
            </>
        )
    }
    else {
        content = (
            <>
                {item.name}
                <button onClick={() => setIsEdit(true)}>编辑</button>
            </>
        )
    }
    return (
        <label>
            {content}
            <button onClick={() => {onDelete(item.id)}}>删除</button>
        </label>
    )
}

export default function ListItem({ list, handleChange, handleDelete }: { list: ListDataType[], handleChange: any, handleDelete: any }) {
    return (
        <ul>
            {
                list.map(item => 
                     (
                        <li key={item.id}>
                            <Task item={item} handleChange={handleChange} onDelete={handleDelete} />
                        </li>
                    )
                )
            }
        </ul>
    )
}