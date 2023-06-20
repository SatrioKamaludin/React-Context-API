import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'

const Todos = () => {
    const {lists} = useContext(DataContext)
    console.log('lists', lists);
    return (
        <ul>
            {lists.map(item =>
                <li key={item.id}>
                    {item.title}
                </li>
            )}
        </ul>
    )
}
export default Todos