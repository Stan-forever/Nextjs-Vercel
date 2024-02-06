'use client'

import { useState } from "react"

let nextId = 0

export default function MyApp() {
    const [arr, setArr] = useState<{name: string, id: number}[]>([])
    const [name, setName] = useState('')
    const [isEdit, setIsEdit] = useState(false)
    const [currentId, setCurrentId] = useState('');
    const handleAdd = () => {
        setArr([
            ...arr, 
            {name: name, id: nextId ++}
        ])
    }
    const handleReverse = () => {
        const copyArr = [...arr]
        copyArr.reverse()
        setArr(copyArr)
    }

    const handleChange = (item: any) => {
        setArr(arr.map(arrItem => {
            if (arrItem.id === item.id) {
                return item
            }
            else {
                return arrItem
            }
        }))
        
    }

    function Content({ item, onChange }: { item: any, onChange: any }) {
        let todoContent
        if (isEdit && item.id === currentId) {
            todoContent = (
                <>
                    <input type="text" onChange={(e) => onChange({ ...item, name: e.target.value })} value={ item.name} />
                    <button onClick={() => { setIsEdit(false)}}>保存</button>
                </>
            )
        }
        else {
            todoContent = (
                <>
                    <span>{item.name}</span>
                    <button onClick={() => { setIsEdit(true);  setCurrentId(item.id)}}>编辑</button>
                </>
            )
        }
        return todoContent
    }

    function ListItem() {
        
    }
    return (
        <>
            名称：<input type="text" onChange={ (e) => setName(e.target.value) }/>
            <button onClick={handleAdd}>添加</button>
            <button onClick={handleReverse}>翻转</button>
             {
                arr?.length > 0 && arr.map(item => {
                    return (
                        <div key={item.id}>
                            <Content item={item} onChange={handleChange} />
                            <button onClick={() => setArr(arr.filter(arrItem => arrItem.name != item.name ))}>删除</button>
                        </div>
                    )
                })
            }
        </>
    )
}