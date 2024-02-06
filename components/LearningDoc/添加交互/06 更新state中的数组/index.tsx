'use client'

import { useState } from "react"
import AddListCom from "./AddListCom"
import ListItem from "./ListItem"

let nextId = 1
export interface ListDataType {
    name: string
    id: number
}
const listData = [
    {name: 'mike', id: 0}
]

export default function MyApp() {
    const [list, setList] = useState<ListDataType[]>(listData)

    const handleAddList = (name: string) => {
        setList([
            ...list,
            {id: nextId ++, name}
        ])
    }

    const handleChange = (item: any) => {
        setList(list.map(listItem => {
            if (listItem.id === item.id) {
                return item
            }
            else {
                return listItem
            }
        }))
    }

    const handleDelete = (id: number) => {
        setList(list.filter(item => item.id !== id))
    }
    
    return (
        <>
            <AddListCom onAddTodo={handleAddList} />
            <ul>
                <ListItem list={list} handleChange={handleChange} handleDelete={handleDelete} />
            </ul>
        </>
    )
}