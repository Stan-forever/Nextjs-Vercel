'use client'

import { useState } from "react"

export default function MyApp() {
    const [person, setPerson] = useState({
        name: 'mike',
        basicInfo: {
            age: 18,
            addr: 'China',
            tel: 123
        }
    })

    const handleInputChange = (e) => {
        setPerson({...person, basicInfo: {...person.basicInfo, [e.target.name]: e.target.value}})
    }

    const handleInputNameChange = (e) => {
        setPerson({...person, [e.target.name]: e.target.value})
    }
    return (
        <>
            <label>
                name: <input type="text" name="name" value={ person.name } onChange={handleInputNameChange} />
            </label>
            <label>
                age: <input type="text" name="age" value={ person.basicInfo.age } onChange={handleInputChange}/>
            </label>
            <label>
                addr: <input type="text" name="addr" value={ person.basicInfo.addr } onChange={handleInputChange}/>
            </label>
            <label>
                tel: <input type="text" name="tel" value={ person.basicInfo.age } onChange={handleInputChange}/>
            </label>
            <div>
                My Name is {person.name}, I'm {person.basicInfo.age},
                I'm from {person.basicInfo.addr},My tel is{person.basicInfo.tel}
            </div>
        </>
    )
}