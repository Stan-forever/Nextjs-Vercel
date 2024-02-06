'use client'

interface PropsType {
    count: number
    handleClick: Function
}

export default function MyButton({count, handleClick}: PropsType) {
    // const [count, setCount] = useState(0)

    // const handleClick = () => {
    //     setCount(count + 1)
    // }

    return (
        <>
            <button onClick={handleClick}>Clicked</button>
            <div>count: {count}</div>
        </>
    ) 
}