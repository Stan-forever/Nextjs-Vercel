import { ReactNode } from 'react'
import Son from './Son'

function Father({ children }: { children: ReactNode }) {
    return (
        <div className="father">
            {children}
        </div>
    )
}

export default function MyApp() {
    return (
        <Father>
            <Son name='mike' age={18} />
        </Father>
    )
}