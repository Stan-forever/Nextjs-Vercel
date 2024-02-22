'use client'

import { useState } from "react"

const initialItems = [
    {title: 'Cola', id: 0},
    {title: 'Cake', id: 1},
    {title: 'Apple', id: 2},
]

const ListItem = ({listData, handleInputChange, setSelectedId }) => {
        return (
            listData.map(item => 
                (
                <li key={item.id}>
                    <input type="text" value={item.title} onChange={(e) => handleInputChange(item.id, e)} />
                    <button onClick={() => setSelectedId(item.id)}>Choose</button>
                </li>
                )
            )
        )
    }

export default function MyApp() {

    const [list, setList] = useState(initialItems)
    const [selectedId, setSelectedId] = useState(0)

    const selectedItem = list.find(item => item.id === selectedId)

    const handleInputChange = (id, e) => {
        setList(list.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    title: e.target.value
                }
            }
            else {
                return item
            }
        }))
    }

    

    return (
        <>
            <div>Choose Your Food!</div>
            <ul>
                <ListItem listData={list} handleInputChange={ handleInputChange } setSelectedId={setSelectedId} />
            </ul>
            <p>You Chosed { selectedItem?.title }</p>
        </>
    )
}