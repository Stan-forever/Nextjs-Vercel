interface PropsType {
    name: string
    age: number
    addr?: string
}

export default function Son({ name, age, addr }: PropsType) {
    return (
        <div>MyName is {name}, I'm { age} now</div>
    )
}