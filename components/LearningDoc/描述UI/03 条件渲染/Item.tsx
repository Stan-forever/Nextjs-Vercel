export default function Item({data}: {data: any}) {
    return (
        <ul>
            {data.map((item: any) => 
                <li key={item.name}>
                    <div>
                        {
                            item.isPacked ? (
                                <>
                                    <del>{ item.name}</del>
                                    <span>{'√'}</span>
                                </>
                                )
                                :
                                (
                                    item.name
                                )
                        }
                    </div>
                </li>    
            )}
        </ul>
    )
}