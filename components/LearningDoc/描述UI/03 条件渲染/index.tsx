import Item from './Item'

const listData = [
    { name: '宇航服', isPacked: true},
    { name: '带金箔的头盔', isPacked: true},
    { name: 'Tam 的照片', isPacked: false},
]

export default function MyApp() {
    return (
        <Item data={ listData} />
    )
}