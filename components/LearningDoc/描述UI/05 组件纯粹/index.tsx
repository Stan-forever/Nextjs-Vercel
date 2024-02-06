'use client'

import { ReactElement, useState } from "react";

function Header({ props }: { props: { name: string } }) {
    return (
        <div>My Name is { props.name }</div>
    )
}


function Panel({ children }: { children: ReactElement }) {
    const [isShow, setIsShow] = useState(true)
    return (
        <div>
            <button onClick={() => setIsShow(!isShow)}>
                {isShow ? 'Collapse' : 'Expand'}
            </button>
            <div>{ isShow && children }</div>
        </div>
    )
}

function Profile({ props }: { props: { name: string } }) {
    return (
        <Panel>
            <Header props={ props } />
        </Panel>
    )
}


export default function MyApp() {
    return (
        <>
            <Profile props={{ name: 'jike' }} />
            <Profile props={ {name: 'jane'} } />
        </>
        
    )
}