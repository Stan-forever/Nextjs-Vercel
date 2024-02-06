'use client'

function Button({ onClick }: { onClick: any }) {
    return (
        <button onClick={(e) => { e.stopPropagation();  onClick()}}>点击</button>
    )
}

export default function MyApp() {
    return (
        <div onClick={ () => {alert('div被点击')}} >
            <Button onClick={ () => {alert('按钮1被点击')} } />
            <Button onClick={ () => {alert('按钮2被点击')} } />
        </div>
    )
}