'use client'

import { useState } from "react"

import {filterMethod, foods, DataType} from './data'

const SearchCom = ({keyword, onChange}) => {
    return (
        <>
            <p>搜索:</p>
            <input type="text" value={keyword} onChange={onChange}/>
        </>
    )
}

const ListCom = ({ data }: { data: DataType[] }) => {
    return (
        <table>
            <tbody>
                {
                    data.map(item => (
                        <tr key={item.id}>
                            <td>{ item.name }</td>
                            <td>{ item.description }</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default function MyApp() {
    const [keyword, setKeyword] = useState('')

    const onChange = (e) => {
        setKeyword(e.target.value)
    }

    const filterData = filterMethod(foods, keyword)

    return (
        <>
            <SearchCom keyword={keyword} onChange={ onChange } />
            <ListCom data={ filterData } />
        </>
    )
}
