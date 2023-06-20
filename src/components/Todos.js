import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'

const Todos = () => {
    const { del, lists } = useContext(DataContext)
    const remove = id => {
        del(id)
    }
    return (
        <ul>
            {lists.map(item =>
                <li key={item.id}>
                    {item.title}
                    <button onClick={() => remove(item.id)}>x</button>
                </li>
            )}
        </ul>
    )
}
export default Todos